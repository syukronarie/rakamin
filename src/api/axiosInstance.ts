/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unneeded-ternary */

import axios from 'axios';
import CONST from '@/utils/Constants';
import Auth from '@/utils/Auth';

const axiosInstance = axios.create({
	baseURL: `${CONST.BASE_API_URL}`,
});

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

export default axiosInstance;
