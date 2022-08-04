import '@testing-library/jest-dom';
import { render, screen } from '@/utils/testUtils';
import Input from '@/components/Input';

describe('Input', async () => {
	it('should render the input', () => {
		render(
			<Input
				name="email"
				type="email"
				error={undefined}
				placeholder="Email"
				label="Email Address"
				aria-label="Email Address"
			/>,
		);
		expect(screen.getByText('Email Address')).toBeInTheDocument();
		expect(
			screen.getByRole('textbox', {
				name: /email address/i,
			}),
		).toBeInTheDocument();
	});

	it('should render the input with error', () => {
		render(
			<Input
				name="email"
				type="email"
				placeholder="Email"
				label="Email Address"
				aria-label="Email Address"
				error="Please enter your email"
			/>,
		);
		expect(
			screen.getByRole('textbox', {
				name: /email address/i,
			}),
		).toBeInTheDocument();
		expect(screen.getByRole('alert')).toHaveTextContent('Please enter your email');
	});
});
