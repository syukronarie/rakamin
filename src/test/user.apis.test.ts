/* eslint-disable @typescript-eslint/ban-ts-comment */

import userAPI from '@/api/user.apis';
import CONST from '@/utils/Constants';

// msw setup
import { rest, server } from './testServer';

// mock up data
import {
	userLoginSampleFalseData,
	userLoginSampleNullData,
	userLoginSampleTrueData,
	userSignUpSampleTrueData,
	userSignUpSampleFalseData,
	userSignUpSampleNameNullData,
	userSignUpSampleEmailNullData,
	userSignUpSamplePasswordNullData,
	userSignUpSamplePasswordConfirmationNullData,
} from './userSampleData';

const { BASE_API_URL } = CONST;

describe('user API test', () => {
	it('should `/auth/login` return success on login', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/auth/login`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json({ auth_token: 'sampletoken' }));
			}),
		);
		const res = await userAPI.signIn(userLoginSampleTrueData);
		expect(res).toStrictEqual({ auth_token: 'sampletoken' });
	});
	it('should `/auth/login` return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(userAPI.signIn(userLoginSampleNullData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/auth/login` return error invalid credentials', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/auth/login`, async (_req, res, ctx) => {
				return res(
					ctx.status(401),
					ctx.json({
						message: 'Invalid credentials',
					}),
				);
			}),
		);
		await expect(userAPI.signIn(userLoginSampleFalseData)).rejects.toThrow('401');
		await expect(userAPI.signIn(userLoginSampleFalseData)).rejects.toThrowError(
			/Invalid credentials/,
		);
	});

	it('should `/signup` return success on signup', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/signup`, async (req, res, ctx) => {
				return res(
					ctx.status(200),
					ctx.json({
						message: 'Account created successfully',
						auth_token: 'sampletoken',
					}),
				);
			}),
		);
		const res = await userAPI.signUp(userSignUpSampleTrueData);
		expect(res).toStrictEqual({
			message: 'Account created successfully',
			auth_token: 'sampletoken',
		});
	});
	it('should `/signup` return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(userAPI.signUp(userSignUpSampleNameNullData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(userAPI.signUp(userSignUpSampleEmailNullData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(userAPI.signUp(userSignUpSamplePasswordNullData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		await expect(
			/* @ts-ignore */
			userAPI.signUp(userSignUpSamplePasswordConfirmationNullData),
		).rejects.toHaveProperty('message', 'Mandatory Fields missing');
	});
	it('should `/signup` return error password not matched', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/signup`, async (_req, res, ctx) => {
				return res(
					ctx.status(401),
					ctx.json({
						message: "Validation failed: Password confirmation doesn't match Password",
					}),
				);
			}),
		);
		await expect(userAPI.signUp(userSignUpSampleFalseData)).rejects.toThrow('401');
		await expect(userAPI.signUp(userSignUpSampleFalseData)).rejects.toThrowError(
			/Validation failed: Password confirmation doesn't match Password/,
		);
	});
});
