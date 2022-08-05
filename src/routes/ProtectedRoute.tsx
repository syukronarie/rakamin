import Auth from '@/utils/Auth';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute() {
	if (Auth.isAuthorization()) {
		return <Navigate to="/v1" replace />;
	}

	return <Outlet />;
}
