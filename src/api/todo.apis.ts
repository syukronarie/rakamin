/* eslint-disable @typescript-eslint/ban-ts-comment */

import { AxiosResponse } from 'axios';
import { APIError, ClientError } from '@/utils/errors';

import ERR_MSG from '@/utils/ErrorMessage';
import axiosInstance from './axiosInstance';

const todoAPI = {
	async getTodos(): Promise<AxiosResponse> {
		try {
			const result = await axiosInstance.get('/todos');
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},

	async createTodo({ title, description }: CreateTodoArgs): Promise<AxiosResponse> {
		if (title === undefined || title === null || description === undefined || description === null)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const data = {
				title,
				description,
			};
			const result = await axiosInstance.post('/todos', data);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},
};

export default todoAPI;
