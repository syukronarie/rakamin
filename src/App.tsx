/* eslint-disable react/prop-types */

import { ConfigProvider } from 'antd';
import { Content, Header, Layout } from './components/styled';
import { colors } from './utils/Constants';
import Cards from './components/Cards';
import './App.scss';

ConfigProvider.config({
	theme: {
		primaryColor: `${colors.primaryMain}`,
	},
});

function App() {
	return (
		<ConfigProvider>
			<Layout className="container">
				<Header>rakamin</Header>
				<Content>{/* <Cards /> */}</Content>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
