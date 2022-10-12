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

type Item = {
	id: number;
	name: string;
	done: boolean | null;
	todo_id: number;
	created_at: string;
	updated_at: string;
	progress_percentage: number;
};

interface Todo {
	id: number;
	title: string;
	created_by: string;
	created_at: string;
	updated_at: string;
	description: string;
}

interface CreateItemArgs {
	todoId: number;
	name: string;
	progressPercentage: number;
}

interface UpdateItemArgs {
	targetTodoId: number;
	itemId: number;
	name: string;
	progressPercentage: number;
}

interface DeleteItemArgs {
	todoId: number;
	itemId: number;
}
