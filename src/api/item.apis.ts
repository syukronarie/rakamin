/* eslint-disable @typescript-eslint/ban-ts-comment */

import { AxiosResponse } from 'axios';
import { APIError, ClientError } from '@/utils/errors';

import ERR_MSG from '@/utils/ErrorMessage';
import axiosInstance from './axiosInstance';

const itemAPI = {
	async getItems(todoId: number): Promise<AxiosResponse> {
		if (todoId === undefined || todoId == null)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);

		try {
			const result = await axiosInstance.get(`/todos/${todoId}/items`);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},

	async createItem({ todoId, name, progressPercentage }: CreateItemArgs): Promise<AxiosResponse> {
		if (
			todoId === undefined ||
			todoId === null ||
			name === undefined ||
			name === null ||
			progressPercentage === undefined ||
			progressPercentage === null
		)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const data = {
				name,
				progress_percentage: progressPercentage,
			};
			const result = await axiosInstance.post(`/todos/${todoId}/items`, data);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},

	async updateItem({
		targetTodoId,
		itemId,
		name,
		progressPercentage,
	}: UpdateItemArgs): Promise<AxiosResponse> {
		if (
			targetTodoId === undefined ||
			targetTodoId === null ||
			itemId === undefined ||
			itemId === null ||
			name === undefined ||
			name === null ||
			progressPercentage === undefined ||
			progressPercentage === null
		)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const data = {
				target_todo_id: targetTodoId,
				name,
			};
			const result = await axiosInstance.patch(`/todos/${targetTodoId}/items/${itemId}`, data);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},

	async deleteItem({ todoId, itemId }: DeleteItemArgs): Promise<AxiosResponse> {
		if (todoId === undefined || todoId === null || itemId === undefined || itemId === null)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const result = await axiosInstance.delete(`/todos/${todoId}/items/${itemId}`);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},
};

export default itemAPI;
