export type AlertProps = {
	content: string;
	header: string;
	type: AlertType.ERROR | AlertType.SUCCESS;
	closeAlert: () => void;
};

export enum AlertType {
	ERROR = 'error',
	SUCCESS = 'success'
}
