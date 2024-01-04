# Boundless API client

JavaScript client for [Boundless Commerce](https://boundless-commerce.com/) API. 

### About Boundless Commerce

API’s First Headless E-commerce CMS: We Provide An Admin-Side For Store Management, Powerful API, And Ready-To-Use 
Checkout Area.

**Self-Hosted solution**:

There is an option for Running Boundless-Commerce on your own server. Read more at [Open-Source Headless eCommerce Platform](https://boundless-commerce.com/open-source)

**Ready to use online-shops (NextJS examples)**:

Just clone and go!

- [Next.js E-commerce Starter kit (v14 version: The new App router)](https://github.com/kirill-zhirnov/nextjs-ecommerce-starter-kit)
- [All E-commerce templates](https://boundless-commerce.com/templates)

**Ready to use checkout area:**

- [Checkout React component](https://github.com/kirill-zhirnov/boundless-checkout-react)


**WIX version:**

- [Wix Boundless Store](https://www.wix.com/app-market/boundless-store)

### API

[API Specification](https://docs.boundless-commerce.com/)

## Installation

`yarn add boundless-api-client` or `npm install boundless-api-client --save`

## Getting Started

Generate access token in the control panel.

#### Setting up with a permanent token

```js
import {BoundlessClient} from 'boundless-api-client';
const apiClient = new BoundlessClient('<YOUR PERMANENT TOKEN>');
apiClient.setInstanceId('<YOUR INSTANCE ID>');

//fetch products:
apiClient.catalog.getProducts().then(data => console.log(data));
```

#### Generate token and make a request

Generate a token yourself is more secure way. Use the following approach to issue an access-token:

```js
import {BoundlessClient} from 'boundless-api-client';
import {generateBoundlessToken} from 'boundless-api-client/token';

const token = generateBoundlessToken('<YOUR CLIENT ID>', '<YOUR SECRET>', '<YOUR INSTANCE ID>');
const apiClient = new BoundlessClient(token);
apiClient.setInstanceId('<YOUR INSTANCE ID>');

//fetch products:
apiClient.catalog.getProducts().then(data => console.log(data));
```

## Library structure

### API client

```js
import {BoundlessClient} from 'boundless-api-client';
const apiClient = new BoundlessClient('<TOKEN>');
apiClient.setInstanceId('<INSTANCE ID>');
```

The client splits into these parts:

#### Catalog

Consists methods for working with the catalog (products, categories, etc.):

```js
const {products, pagiantion} = await apiClient.catalog.getProducts();
const categories = await apiClient.catalog.getCategoryTree();
//...
```

For a full list of methods please visit the official documentation.

#### Cart

Consists methods for working with the cart.

```js
//creates a cart:
const cart = await apiClient.cart.retrieveCart();

//fetch cart info (e.g. cartId is stored in cookie):
const cart = await apiClient.cart.getCartInfo('<CART ID>');

//fetch cart items
const data = await apiClient.cart.getCartItems('<CART ID>');

//add to cart
const data = await apiClient.cart.addItemToCart('<CART ID>', '<ITEM ID>', '<QTY>');
//...
```

For a full list of methods please visit the official documentation.

#### Checkout

Consists methods for working with the checkout.

```js
const checkoutData = await apiClient.checkout.init('<CART ID>');
const {customer} = await apiClient.checkout.saveContactsData({order_id: '<ORDER ID>', email: '<CUSTOMER EMAIL>'});
//...
```

For a full list of methods please visit the official documentation.

#### Customer

Consists methods for working with the customer.

```js
const {customer, authToken} = await apiClient.customer.login('<EMAIL>', '<PASS>');
const {customer, authToken} = await apiClient.customer.register({...customerData});
```

If there is a customer auth token, you need to specify it in the client:

```js
apiClient.setCustomerAuthToken(authToken);

//reset token:
apiClient.setCustomerAuthToken(null);

//get token:
apiClient.getCustomerAuthToken();
```

For a full list of methods please visit the official documentation.

#### Public order's methods

Consists methods for working with customer's orders:

```js
const order = await apiClient.customerOrder.getOrder('<ID>');
await apiClient.customerOrder.setCustomAttrs({order_id, attrs});
//...
```

For a full list of methods please visit the official documentation.

#### Private order's methods

**Access is available only for tokens with the management rights.**

```js
const {orders, pagination} = await apiClient.adminOrder.getOrders();
```

For a full list of methods please visit the official documentation.

### Thumbnail generation

To generate a thumbnail by a local path:

```js
const thumb = apiClient.makeThumb({imgLocalPath, maxSize});
thumb.getSrc(); //returns URL to the media server
```

To get thumbnail attributes (width and height) pass original width/height:

```js
const thumb = apiClient.makeThumb({imgLocalPath, maxSize, originalWidth, originalHeight});
thumb.getAttrs(); //returns {src, width, height}
```

#### Thumbnail transformations:

```js
const thumb = apiClient.makeThumb({imgLocalPath, maxSize});

//Set quality:
thumb.setQuality('<low | normal | hight>');

//set ratio:
thumb.setRatio('<1-1 | 2-3 | 3-2 | 4-5 | 5-4 | 3-4 | 4-3 | 16-9 | 9-16>');

//set pad: boolean
thumb.setPad(value);

//blur image, blur - number: 0-15
thumb.setBlur(blur);

//background: hex, e.g. 'ffffff'
thumb.setBackground(hex);

//grayscale: boolean
thumb.setGrayscale(value);

//get resulting SRC:
thumb.getSrc();
```

## Arbitrary requests

There are methods in the [API](https://docs.boundless-commerce.com/) which aren't covered by the interface access, so you need to execute requests manually:

```js
//setup the client in the same way:
import {BoundlessClient} from 'boundless-api-client';
const apiClient = new BoundlessClient('<YOUR TOKEN>');

//executing GET request
const {data, headers} = await apiClient.createRequest().get('/catalog/attributes');

//POST
await apiClient.createRequest().post('/catalog/products', {
	title: 'My new product',
	slug: '...'
});

//PUT
await apiClient.createRequest().put('/catalog/products/1', {title: 'my new title'});
```

`apiClient.createRequest()` returns instance of `AxiosInstance` - pre-configured instance for API requests.

Example of files uploader (where `file` is instance of `File`):

```js
const formData = new FormData();
formData.append('file_name', file.name);
formData.append('file', file);
formData.append('for_product_id', 1);

const {data} = await apiClient.createRequest().post('/files/images/upload', formData);
```


## How to build library?

```
yarn build
```

---

[NextJS eCommerce templates](https://boundless-commerce.com/templates) - Free. Ready to use. Just clone & deploy!