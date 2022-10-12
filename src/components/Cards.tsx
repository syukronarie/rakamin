/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import itemAPI from '@/api/item.apis';
import { Button, Spin } from 'antd';
import { CirclePlusIcon } from '@/assets';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useMutation } from '@tanstack/react-query';
import { Card, CardStyled, Tag, TextDesc } from './styled';

import CardItem from './CardItem';

interface CardProps {
	todos: Todo[];
	isLoading: boolean;
}

const getListStyle = (_isDraggingOver: any) => ({
	// background: isDraggingOver ? 'lightblue' : 'lightgrey',
	// padding: grid,
	width: '100%',
	height: '100%',
});

const Cards: React.FC<CardProps> = (props: CardProps) => {
	const { todos, isLoading } = props;

	const updateItem = useMutation((updateData: UpdateItemArgs) => itemAPI.updateItem(updateData));

	function onDragEnd(result: any) {
		const { source, destination } = result;
		console.log(result);
		// dropped outside the list
		if (!destination) {
			return;
		}
		const sInd = +source.droppableId;
		const dInd = +destination.droppableId;

		console.log({ sInd, dInd });

		// updateItem.mutate()

		// if (sInd === dInd) {
		// } else {
		// }
	}

	return (
		<CardStyled>
			<DragDropContext onDragEnd={(result) => onDragEnd(result)}>
				{isLoading && <Spin />}
				{todos?.map((val) => (
					<Card key={val.id}>
						<Tag className="primary-surface">
							{val.title} todoId: {val.id}
						</Tag>
						<TextDesc>{val.description}</TextDesc>
						<Droppable key={val.id} droppableId={`${val.id}`}>
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									style={getListStyle(snapshot.isDraggingOver)}
									{...provided.droppableProps}
									className="droppable-card-body"
								>
									<CardItem id={val.id} />
									{provided.placeholder}
								</div>
							)}
						</Droppable>
						<Button type="link" icon={<CirclePlusIcon />}>
							New Task
						</Button>
					</Card>
				))}
			</DragDropContext>
		</CardStyled>
	);
};

export default Cards;
