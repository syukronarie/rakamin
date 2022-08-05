/* eslint-disable @typescript-eslint/ban-ts-comment */

import todoAPI from '@/api/todo.apis';
import CONST from '@/utils/Constants';

// msw setup
import { rest, server } from './testServer';

// mock up data
import {
	todoSampleResultData,
	todoSampleArgsData,
	todoSampleWrongArgsData,
	todoSampleTitleNullArgsData,
	todoSampleDescNullArgsData,
	todoSampleCreateResultData,
	sampleSomethingWrongData,
	regexSWW,
} from './todoSampleData';

const { BASE_API_URL } = CONST;

describe('todo API test', () => {
	it('should get `/todos` return success', async () => {
		server.use(
			rest.get(`${BASE_API_URL}/todos`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(todoSampleResultData));
			}),
		);
		const res = await todoAPI.getTodos();
		expect(res).toStrictEqual(todoSampleResultData);
	});
	it('should get `/todos` return handle error', async () => {
		server.use(
			rest.get(`${BASE_API_URL}/todos`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(todoAPI.getTodos()).rejects.toThrow('401');
		await expect(todoAPI.getTodos()).rejects.toThrowError(regexSWW);
	});
	it('should `/todos` return success on creating', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/todos`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(todoSampleCreateResultData));
			}),
		);
		const res = await todoAPI.createTodos(todoSampleArgsData);
		expect(res).toStrictEqual(todoSampleCreateResultData);
	});
	it('should `/todos` return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(todoAPI.createTodos(todoSampleTitleNullArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(todoAPI.createTodos(todoSampleDescNullArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/todos` return error', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/todos`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(todoAPI.createTodos(todoSampleWrongArgsData)).rejects.toThrow('401');
		await expect(todoAPI.createTodos(todoSampleWrongArgsData)).rejects.toThrowError(regexSWW);
	});
});
