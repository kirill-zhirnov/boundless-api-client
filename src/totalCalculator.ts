import * as currency from 'currency.js';
import {TDiscountType, IOrderDiscount} from './types/orders/orders';

export class TotalCalculator {
	public itemsList: IItem[] = [];

	public items: IItemsTotal = {
		price: 0,
		qty: 0
	};

	public shipping: {price: number} = {
		price: 0
	};

	public services: IItemsTotal = {
		price: 0,
		qty: 0
	};

	public discounts: IDiscountRow[] = [];

	public paymentMarkUp: number = 0;

	addItem(id: number, price: number, qty: number) {
		if (this.itemsList.some(el => el.id === id)) return this;

		this.itemsList.push({
			id,
			price,
			qty
		});

		this.calcTotalForItems();
	}

	changeItem(item: IItem) {
		const index = this.itemsList.findIndex(el => el.id === item.id);
		if (index !== -1) {
			Object.assign(this.itemsList[index], item);
			this.calcTotalForItems();
		}
	}

	changeItemPrice(itemId: number, price: number) {
		const index = this.itemsList.findIndex(el => el.id === itemId);
		if (index !== -1) {
			this.itemsList[index].price = price;
			this.calcTotalForItems();
		}
	}

	changeItemQty(itemId: number, qty: number) {
		const index = this.itemsList.findIndex(el => el.id === itemId);
		if (index !== -1) {
			this.itemsList[index].qty = qty;
			this.calcTotalForItems();
		}
	}

	rmItem(id: number) {
		this.itemsList = this.itemsList.filter(el => el.id !== id);

		this.calcTotalForItems();
	}

	clearItems() {
		this.itemsList = [];
	}

	setItems(price: number, qty: number) {
		this.items = {
			price,
			qty
		};

		return this;
	}

	setShipping(price: number) {
		this.shipping.price = price;

		return this;
	}

	setServices(price: number, qty: number) {
		this.services = {
			price,
			qty
		};

		return this;
	}

	setPaymentMarkUp(val: number) {
		this.paymentMarkUp = val;

		return this;
	}

	clearDiscounts() {
		this.discounts = [];
	}

	setDiscounts(discounts: IOrderDiscount[]) {
		discounts.forEach(row => this.addDiscount(row.discount_type, row.value));

		return this;
	}

	addDiscount(type: TDiscountType, value: number|string) {
		this.discounts.push({
			type,
			value
		});

		return this;
	}

	calcTotalForItems() {
		this.items.price = this.itemsList.reduce((a, b) => a + Number(b.price * b.qty), 0);
		this.items.qty = this.itemsList.reduce((a, b) => a + Number(b.qty), 0);
		return this.items;
	}

	calcTotal(): {price: string, discount: string, paymentMarkUp: string} {
		let price = currency(this.items.price)
			.add(this.shipping.price)
			.add(this.services.price)
			.format()
			;

		let discount = currency(0).format();
		this.discounts.forEach((row) => {
			switch (row.type) {
				case 'fixed':
					discount = currency(discount).add(row.value).format();
					price = currency(price).subtract(row.value).format();
					break;

				case 'percent': {
					//apply discount only to items, not services:
					const rowVal = currency(row.value).divide(100).multiply(this.items.price).format();

					discount = currency(discount).add(rowVal).format();
					price = currency(price).subtract(rowVal).format();
					break;
				}
			}
		});

		let paymentMarkUp = currency(0).format();
		if (this.paymentMarkUp) {
			paymentMarkUp = currency(price).multiply(currency(this.paymentMarkUp)).divide(100).format();
			price = currency(price).add(paymentMarkUp).format();
		}

		return {
			price,
			discount,
			paymentMarkUp
		};
	}
}

interface IItem {
	id: number,
	price: number,
	qty: number
}

interface IItemsTotal {
	price: number,
	qty: number
}

interface IDiscountRow {
	type: TDiscountType,
	value: number|string;
}