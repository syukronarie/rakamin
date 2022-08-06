/* eslint-disable @typescript-eslint/ban-ts-comment */
/* @ts-ignore */
import todoAPI from '@/api/todo.apis';
import { Cards } from '@/components';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
	const todos = useQuery(['todos'], () => todoAPI.getTodos());

	React.useEffect(() => {
		if (todos.isError) throw new Error(todos.error as string);
	}, [todos]);

	return <Cards todos={(todos.data as unknown as Todo[]) || []} isLoading={todos.isLoading} />;
};

export default Home;
