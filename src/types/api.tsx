export interface ApiResponse {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	message: string;
	statusCode: number;
	success: boolean;
}
