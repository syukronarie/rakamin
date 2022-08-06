import React from 'react';
import Auth from '@/utils/Auth';
import { Button } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { Content, Header, LayoutWrapper } from './styled';

const Layout: React.FC = () => {
	const navigate = useNavigate();
	React.useEffect(() => {
		if (Auth.isAuthorization()) {
			navigate('/v1');
		} else {
			navigate('/v1/signin');
		}
	}, [navigate]);
	return (
		<LayoutWrapper>
			<Header>
				<h3>rakamin - product roadmap</h3>
				{!!Auth.isAuthorization() && (
					<Button type="link" onClick={() => Auth.signOut(navigate)}>
						sign out
					</Button>
				)}
			</Header>
			<Content>
				<Outlet />
			</Content>
		</LayoutWrapper>
	);
};

export default Layout;
