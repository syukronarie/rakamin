/* eslint-disable @typescript-eslint/ban-ts-comment */

import { AxiosResponse } from 'axios';
import { APIError, ClientError } from '@/utils/errors';

import ERR_MSG from '@/utils/ErrorMessage';
import axiosInstance from './axiosInstance';

const userAPI = {
	async signIn({ email, password }: SignInArgs): Promise<AxiosResponse> {
		if (email === undefined || email === null || password === undefined || password === null)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const result = await axiosInstance.post('/auth/login', { email, password });
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},

	async signUp({
		name,
		email,
		password,
		passwordConfirmation,
	}: SignUpArgs): Promise<AxiosResponse> {
		if (
			name === undefined ||
			name === null ||
			email === undefined ||
			email === null ||
			password === undefined ||
			password === null ||
			passwordConfirmation === undefined ||
			passwordConfirmation === null
		)
			throw new ClientError(ERR_MSG.MANDATORY_FIELD_MISSING_ERROR);
		try {
			const data = {
				name,
				email,
				password,
				password_confirmation: passwordConfirmation,
			};
			const result = await axiosInstance.post('/signup', data);
			return result.data;
		} catch (err) {
			/* @ts-ignore */
			throw new APIError(JSON.stringify(err.response));
		}
	},
};

export default userAPI;
