import './App.scss';
import { Button, ConfigProvider } from 'antd';

ConfigProvider.config({
	theme: {
		primaryColor: '#01959F',
	},
});

function App() {
	return (
		<ConfigProvider>
			<Button>Test</Button>
		</ConfigProvider>
	);
}

export default App;
