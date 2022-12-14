import userAPI from '@/api/user.apis';
import { Alert } from '@/components';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface SignIn {
	email: string;
	password: string;
	remember: boolean;
}

const SignIn = () => {
	const signIn = useMutation((data: SignInArgs) => userAPI.signIn(data));
	const navigate = useNavigate();

	const onFinish = (values: SignIn) => {
		if (values) {
			signIn.mutate(values);
		}
	};

	const onFinishFailed = (errorInfo: unknown) => {
		console.log('Failed:', errorInfo);
	};

	useEffect(() => {
		if (signIn.isError) throw new Error(signIn.error as string);
		if (signIn.isSuccess) {
			Alert.signInSuccess(navigate);
		}
	}, [signIn, navigate]);

	return (
		<Form
			name="basic"
			labelCol={{ span: 8 }}
			wrapperCol={{ span: 16 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			autoComplete="off"
		>
			<Form.Item
				label="Email"
				name="email"
				rules={[{ required: true, message: 'Please input your email!' }]}
			>
				<Input type="email" />
			</Form.Item>

			<Form.Item
				label="Password"
				name="password"
				rules={[{ required: true, message: 'Please input your password!' }]}
			>
				<Input.Password />
			</Form.Item>

			<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>

			<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
				<Button loading={signIn.isLoading} type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</Form>
	);
};

export default SignIn;
