import { message } from 'antd';
import { NavigateFunction } from 'react-router-dom';

const signInSuccess = (navigate: NavigateFunction) => {
	message
		.loading(`One second...`, 1)
		.then(() => message.info('Here we go...', 1))
		.then(() => message.success('You are successfully signed in', 2))
		.then(() => message.info('Redirecting to dashboard', 1))
		.then(() => navigate('/v1'));
};

const error = (statusText: string, textMessage: string) => {
	message
		.loading(`One second...`, 1)
		.then(() => message.info('Here we go...', 2))
		.then(() => message.error('Hmmm', 1))
		.then(() => message.error(`${statusText}: ${textMessage}`, 2.5));
};

const Alert = { signInSuccess, error };

export default Alert;
