export type AlertProps = {
	content: string;
	header: string;
	type: AlertType.ERROR | AlertType.SUCCESS;
	// eslint-disable-next-line @typescript-eslint/ban-types
	closeAlert: () => void;
};

export enum AlertType {
	ERROR = 'error',
	SUCCESS = 'success'
}
