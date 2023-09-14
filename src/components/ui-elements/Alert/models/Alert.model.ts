export type AlertProps = {
	content: string;
	header: string;
	type: AlertType.ERROR | AlertType.SUCCESS;
};

export enum AlertType {
	ERROR = 'error',
	SUCCESS = 'success'
}
