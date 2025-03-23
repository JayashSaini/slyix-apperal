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
	return apiClient.post("/users/login", data);
};

const registerUser = (data: {
	email: string;
	username: string;
	password: string;
}) => {
	return apiClient.post("/users/register", data);
};

const logoutUser = () => {
	return apiClient.get("/users/logout");
};

const selfUser = () => {
	return apiClient.get("/users/self");
};

export {
	apiClient,
	loginUser,
	registerUser,
	logoutUser,
	selfUser,
	// Add other API functions as needed for other endpoints
};
