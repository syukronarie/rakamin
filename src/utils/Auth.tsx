import Cookies from 'js-cookie';
import { NavigateFunction } from 'react-router-dom';

const Auth = {
	isAuthorization() {
		return Cookies.get('token');
	},
	signOut(navigate: NavigateFunction) {
		Cookies.remove('token');
		navigate('/v1/signin');
	},
};

export default Auth;
