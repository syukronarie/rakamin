/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */

import React from 'react';
import { ConfigProvider } from 'antd';
import { ErrorBoundary } from 'react-error-boundary';
import { useRoutes } from 'react-router-dom';

import routes from '@/routes';
import { Alert } from '@/components';
import { colors } from '@/utils/Constants';

import './App.scss';

function ErrorFallback({ error, resetErrorBoundary }: any) {
	React.useEffect(() => {
		if (error.message.includes('API Error')) {
			const message = error.message.slice(11);
			const data = JSON.parse(message);
			Alert.error(data.statusText, data.data.message);
		}

		resetErrorBoundary();
	}, [error, resetErrorBoundary]);

	return null;
}

ConfigProvider.config({
	theme: {
		primaryColor: `${colors.primaryMain}`,
	},
});

function App() {
	const element = useRoutes(routes);
	return (
		<ConfigProvider>
			<ErrorBoundary FallbackComponent={ErrorFallback}>{element}</ErrorBoundary>
		</ConfigProvider>
	);
}

export default App;
