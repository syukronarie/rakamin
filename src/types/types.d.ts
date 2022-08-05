interface SignInArgs {
	email: string;
	password: string;
}

interface SignUpArgs {
	name: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}

interface CreateTodoArgs {
	title: string;
	description: string;
}
