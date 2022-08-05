import { Button } from 'antd';
import { CirclePlusIcon } from '@/assets';
import { Card, Tag, TextDesc } from './styled';

import CardItem from './CardItem';

type Todo = {
	id: number;
	title: string;
	created_by: string;
	created_at: string;
	updated_at: string;
	description: string;
};

interface CardProps {
	todos: Todo[];
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
	const { todos } = props;
	return (
		<>
			{todos.map((val) => (
				<Card key={val.id}>
					<Tag className="primary-surface">{val.title}</Tag>
					<TextDesc>{val.description}</TextDesc>
					<CardItem id={val.id} />
					<Button type="link" icon={<CirclePlusIcon />}>
						Search
					</Button>
				</Card>
			))}
		</>
	);
};

export default Cards;
