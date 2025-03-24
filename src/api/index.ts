// Import necessary modules and utilities
import axios from "axios";
import { LocalStorage } from "@/lib/utils";

// Create an Axios instance for API requests
const apiClient = axios.create({
	baseURL: "/api/v1",
	withCredentials: true,
	timeout: 120000,
});

// Add an interceptor to set authorization header with user token before requests
// Add a request interceptor to set the authorization header with user token
apiClient.interceptors.request.use(
	function (config) {
		// Retrieve user token from local storage
		const token = LocalStorage.get("token");
		// Set authorization header with bearer token
		config.headers.Authorization = `Bearer ${token}`;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// API functions for User actions
const loginUser = (data: { email: string; password: string }) => {
	return apiClient.post("/user/login", data);
};

const registerUser = (data: {
	email: string;
	username: string;
	password: string;
}) => {
	return apiClient.post("/user/register", data);
};

const logoutUser = () => {
	return apiClient.get("/user/logout");
};

const selfUser = () => {
	return apiClient.get("/user/self");
};

const forgotPasswordRequest = (email: string) => {
	return apiClient.post("/user/forgot-password-request", { email });
};

const verifyOTPRequest = (data: { email: string; otp: string }) => {
	return apiClient.post("/user/verify-otp", data);
};

const resetPasswordRequest = (data: {
	newPassword: string;
	confirmPassword: string;
	token: string;
}) => {
	return apiClient.post(`/user/forgot-password/${data.token}`, {
		newPassword: data.newPassword,
		confirmPassword: data.confirmPassword,
	});
};

const resendEmailVerificationRequest = (email: string) => {
	return apiClient.post(`/user/resend-verify-email`, { email });
};

const verifyEmailRequest = (token: string) => {
	return apiClient.post(`/user/verify-email/${token}`);
};
export {
	apiClient,
	loginUser,
	registerUser,
	logoutUser,
	selfUser,
	forgotPasswordRequest,
	verifyOTPRequest,
	resetPasswordRequest,
	resendEmailVerificationRequest,
	verifyEmailRequest,
	// Add other API functions as needed for other endpoints
};
