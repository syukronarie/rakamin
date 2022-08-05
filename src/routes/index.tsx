import type { RouteObject } from 'react-router-dom';
import { Layout, NoMatch } from '@/components';

import Home from '@/views/Home';
import SignIn from '@/views/SignIn';
import ProtectedRoute from './ProtectedRoute';
import PrivateRoute from './PrivateRoute';

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/v1', element: <PrivateRoute />, children: [{ index: true, element: <Home /> }] },
			{
				path: '/v1/signin',
				element: <ProtectedRoute />,
				children: [
					{ index: true, element: <SignIn /> },
					// {
					// 	path: '/signup',
					// 	element: <SignUp />,
					// },
				],
			},
			{
				path: '/v1/signup',
				element: <ProtectedRoute />,
				children: [
					// { index: true, element: <SignUp /> },
				],
			},
			{ path: '*', element: <NoMatch /> },
		],
	},
];

export default routes;
