/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import Hello from '@/components/Hello';
import { render, screen } from '@/utils/testUtils';

describe('Hello Component', () => {
	it('should render Hello', () => {
		render(<Hello />);
		expect(screen.getByText('Hello World')).toBeInTheDocument();
	});
});
