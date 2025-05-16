// Import necessary modules and utilities
import axios from "axios";
import { LocalStorage } from "@/lib/utils";

// Create an Axios instance for API requests
const ecomClient = axios.create({
	baseURL: "/ecom/v1",
	withCredentials: true,
	timeout: 120000,
});

// Add an interceptor to set authorization header with user token before requests
// Add a request interceptor to set the authorization header with user token
ecomClient.interceptors.request.use(
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
const getCategoriesAPI = () => {
	return ecomClient.get("/categories");
};

const getProductsAPI = ({ limit = 10, page = 1 } = {}) => {
	return ecomClient.get(`/products?page=${page}&limit=${limit}`);
};

const getProductByIdAPI = (id: string) => {
	return ecomClient.get(`/products/${id}`);
};

const getVariantByIdAPI = (id: string) => {
	return ecomClient.get(`/products/variants/${id}`);
};

const getCategoryByIdAPI = (id: number, page = 1, limit = 10) => {
	return ecomClient.get(`/categories/${id}?page=${page}&limit=${limit}`);
};
export {
	ecomClient,
	getCategoriesAPI,
	getProductsAPI,
	getProductByIdAPI,
	getVariantByIdAPI,
	getCategoryByIdAPI,
};
