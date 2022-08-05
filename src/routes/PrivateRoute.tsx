import Auth from '@/utils/Auth';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
	if (!Auth.isAuthorization()) {
		return <Navigate to="/v1/signin" replace />;
	}

	return <Outlet />;
}
