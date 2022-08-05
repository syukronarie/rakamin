/* eslint-disable @typescript-eslint/ban-ts-comment */

import itemAPI from '@/api/item.apis';
import CONST from '@/utils/Constants';
import { regexSWW, sampleSomethingWrongData } from './commonSampleData';

// msw setup
import { rest, server } from './testServer';

// mock up data
// import {
// itemSampleResultData,
// itemSampleCreateArgsData,
// itemSampleCreateResultData,
// , itemSampleCreateResultData
// , itemSampleCreateTodoIdNullArgs
// , itemSampleCreateNameNullArgs
// , itemSampleCreateProgNullArgs
// , itemSampleCreateWrongArgs
// } from './itemSampleData';

const { BASE_API_URL } = CONST;

const itemSampleResultData = [
	{
		id: 1,
		name: 'Redesign page',
		done: null,
		todo_id: 1,
		created_at: '2021-04-21T00:12:06.116Z',
		updated_at: '2021-04-21T00:12:06.116Z',
		progress_percentage: null,
	},
	{
		id: 2,
		name: 'Redesign page part 2',
		done: null,
		todo_id: 1,
		created_at: '2021-04-21T00:14:38.397Z',
		updated_at: '2021-04-21T00:14:38.397Z',
		progress_percentage: 60,
	},
];

const itemSampleCreateArgsData = {
	todoId: 1,
	name: 'test',
	progressPercentage: 60,
};

const itemSampleCreateResultData = {
	id: 2,
	name: 'Redesign page part 2',
	done: null,
	todo_id: 1,
	created_at: '2021-04-21T00:14:38.397Z',
	updated_at: '2021-04-21T00:14:38.397Z',
	progress_percentage: 60,
};

const itemSampleCreateTodoIdNullArgs = {
	todoId: null,
	name: 'test',
	progressPercentage: 12,
};

const itemSampleCreateNameNullArgs = {
	todoId: 1,
	name: null,
	progressPercentage: 12,
};

const itemSampleCreateProgNullArgs = {
	todoId: 1,
	name: 'test',
	progressPercentage: null,
};

const itemSampleCreateWrongArgs = {
	todoId: 1,
	name: '\0',
	progressPercentage: 0,
};

const itemSampleUpdateArgsData = {
	targetTodoId: 2,
	itemId: 2,
	name: 'test',
	progressPercentage: 70,
};

const itemSampleUpdateResultData = {
	todo_id: 2,
	id: 1,
	name: 'Redesign page',
	done: null,
	created_at: '2021-04-21T00:12:06.116Z',
	updated_at: '2021-04-21T00:35:03.446Z',
	progress_percentage: null,
};

const itemSampleUpdateTargetNullArgsData = {
	targetTodoId: null,
	itemId: 2,
	name: 'test',
	progressPercentage: 70,
};

const itemSampleUpdateItemIdNullArgsData = {
	targetTodoId: 2,
	itemId: null,
	name: 'test',
	progressPercentage: 70,
};

const itemSampleUpdateNameNullArgsData = {
	targetTodoId: 2,
	itemId: 2,
	name: null,
	progressPercentage: 70,
};

const itemSampleUpdateProgArgsData = {
	targetTodoId: 2,
	itemId: 2,
	name: 'test',
	progressPercentage: null,
};

const itemSampleUpdateWrongArgs = {
	targetTodoId: 1,
	itemId: 2,
	name: '\0',
	progressPercentage: 70,
};

const itemSampleDeleteArgs = {
	itemId: 1,
	todoId: 1,
};

const itemSampleDeleteItemIdNullArgs = {
	itemId: null,
	todoId: 1,
};

const itemSampleDeleteTodoIdNullArgs = {
	itemId: 1,
	todoId: null,
};

const itemSampleDeleteWrongArgs = {
	itemId: 1,
	todoId: 1,
};

describe('todo API test', () => {
	it('should get `/todos/{id}/items` return success', async () => {
		server.use(
			rest.get(`${BASE_API_URL}/todos/1/items`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(itemSampleResultData));
			}),
		);
		const res = await itemAPI.getItems(1);
		expect(res).toStrictEqual(itemSampleResultData);
	});
	it('should get `/todos/{id}/items` return handle error', async () => {
		server.use(
			rest.get(`${BASE_API_URL}/todos/1/items`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(itemAPI.getItems(1)).rejects.toThrow('401');
		await expect(itemAPI.getItems(1)).rejects.toThrowError(regexSWW);
	});
	it('should get `/todos/{id}/items` return mandatory fields missing', async () => {
		/* @ts-ignore */
		await expect(itemAPI.getItems(null)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/todos/{todoId}/items` return success on creating', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/todos/1/items`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(itemSampleCreateResultData));
			}),
		);
		const res = await itemAPI.createItem(itemSampleCreateArgsData);
		expect(res).toStrictEqual(itemSampleCreateResultData);
	});
	it('should `/todos` return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(itemAPI.createItem(itemSampleCreateTodoIdNullArgs)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.createItem(itemSampleCreateNameNullArgs)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.createItem(itemSampleCreateProgNullArgs)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/todos` return error', async () => {
		server.use(
			rest.post(`${BASE_API_URL}/todos/1/items`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(itemAPI.createItem(itemSampleCreateWrongArgs)).rejects.toThrow('401');
		await expect(itemAPI.createItem(itemSampleCreateWrongArgs)).rejects.toThrowError(regexSWW);
	});
	it('should `/todos/{todoId}/items/{itemId}` return success on updating', async () => {
		server.use(
			rest.patch(`${BASE_API_URL}/todos/2/items/2`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json(itemSampleUpdateResultData));
			}),
		);
		const res = await itemAPI.updateItem(itemSampleUpdateArgsData);
		expect(res).toStrictEqual(itemSampleUpdateResultData);
	});
	it('should `/todos/{todoId}/items/{itemId}` return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(itemAPI.updateItem(itemSampleUpdateTargetNullArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.updateItem(itemSampleUpdateItemIdNullArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.updateItem(itemSampleUpdateNameNullArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.updateItem(itemSampleUpdateProgArgsData)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/todos/{todoId}/items/{itemId}` return error', async () => {
		server.use(
			rest.patch(`${BASE_API_URL}/todos/1/items/2`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(itemAPI.updateItem(itemSampleUpdateWrongArgs)).rejects.toThrow('401');
		await expect(itemAPI.updateItem(itemSampleUpdateWrongArgs)).rejects.toThrowError(regexSWW);
	});
	it('should `/todos/{todoId}/items/{itemId}` return success on deleting', async () => {
		server.use(
			rest.delete(`${BASE_API_URL}/todos/1/items/1`, async (req, res, ctx) => {
				return res(ctx.status(200), ctx.json({ success: true }));
			}),
		);
		const res = await itemAPI.deleteItem(itemSampleDeleteArgs);
		expect(res).toStrictEqual({ success: true });
	});
	it('should `/todos/{todoId}/items/{itemId}` delete return error missing mandatory field', async () => {
		/* @ts-ignore */
		await expect(itemAPI.deleteItem(itemSampleDeleteItemIdNullArgs)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
		/* @ts-ignore */
		await expect(itemAPI.deleteItem(itemSampleDeleteTodoIdNullArgs)).rejects.toHaveProperty(
			'message',
			'Mandatory Fields missing',
		);
	});
	it('should `/todos/{todoId}/items/{itemId}` patch return error', async () => {
		server.use(
			rest.delete(`${BASE_API_URL}/todos/1/items/1`, async (_req, res, ctx) => {
				return res(ctx.status(401), ctx.json(sampleSomethingWrongData));
			}),
		);
		await expect(itemAPI.deleteItem(itemSampleDeleteWrongArgs)).rejects.toThrow('401');
		await expect(itemAPI.deleteItem(itemSampleDeleteWrongArgs)).rejects.toThrowError(regexSWW);
	});
});
