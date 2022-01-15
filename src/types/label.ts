export interface ILabel {
	label_id: number;
	title: string;
	color: string;
	text_color: string;
	icon: string|null;
	remove_after?: string|null;
	created_at?: string;
	deleted_at?: string|null;
}