/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-prototype-builtins */
import Auth from '@/utils/Auth';
import axiosInstance from './axiosInstance';

export const isHandlerEnabled = (config: any) => {
	return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

export const requestHandler = (config: any) => {
	if (isHandlerEnabled(config)) {
		const auth = Auth.isAuthorization();
		if (auth) {
			config.headers.Authorization = `Bearer ${auth}`;
		}
	}
	return config;
};

export const successHandler = (response: any) => {
	if (isHandlerEnabled(response)) {
		if (response.status === 200) {
			return response;
		}
	}
	return response;
};

export const errorHandler = (error: any) => {
	return Promise.reject({ ...error });
};

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
	(response) => successHandler(response),
	(error) => errorHandler(error),
);
