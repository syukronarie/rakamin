import todoAPI from '@/api/todo.apis';
import { Cards } from '@/components';
import React from 'react';
import { useQuery } from 'react-query';

const Home = () => {
	const todos = useQuery(['todos'], () => todoAPI.getTodos());

	React.useEffect(() => {
		if (todos.isError) throw new Error(todos.error);
	}, [todos]);

	return <Cards todos={todos.data || []} isLoading={todos.isLoading} />;
};

export default Home;
