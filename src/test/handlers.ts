/* eslint-disable import/prefer-default-export */

import CONST from '@/utils/Constants';
import { rest } from 'msw';

const { BASE_API_URL } = CONST;

const handlers = [
	rest.post(`${BASE_API_URL}/auth/login`, async (_req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ auth_token: 'sampletoken' }));
	}),
];

export { handlers };
