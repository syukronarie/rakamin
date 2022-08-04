/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
type InputProps = {
	label: string;
	name: string;
	error?: string | undefined;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({ label, name, error, ...props }: InputProps) => {
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input name={name} id={name} {...props} />
			{error ? <span role="alert">{error}</span> : null}
		</>
	);
};

export default Input;
