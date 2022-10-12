/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import itemAPI from '@/api/item.apis';
import { Progress } from 'antd';
import { SettingIcon } from '@/assets';
import { Draggable } from 'react-beautiful-dnd';
import { CardChild, Line, ProgressContent, Text } from './styled';

type Item = {
	id: number;
	name: string;
	done: boolean | null;
	todo_id: number;
	created_at: string;
	updated_at: string;
	progress_percentage: number;
};

interface CardItem {
	id: number;
}

const getItemStyle = (_isDragging: any, draggableStyle: any) => ({
	// some basic styles to make the items look a bit nicer
	userSelect: 'none',
	// padding: grid * 2,
	// margin: `0 0 ${grid}px 0`,

	// change background colour if dragging
	// background: isDragging ? 'lightgreen' : 'grey',
	width: '100%',

	// styles we need to apply on draggables
	...draggableStyle,
});

const CardItem: React.FC<CardItem> = (props) => {
	const { id } = props;
	// const items = useQuery(['items', id], () => itemAPI.getItems(id));
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		(async () => {
			const data = await itemAPI.getItems(id);
			/* @ts-ignore */
			setItems(data);
		})();
	}, [id]);

	return (
		<>
			{items?.map((val: Item, idx: number) => (
				<Draggable key={val.id} draggableId={`${val.id}`} index={idx}>
					{(provided, snapshot) => (
						<div
							ref={provided.innerRef}
							{...provided.draggableProps}
							{...provided.dragHandleProps}
							style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
						>
							<CardChild>
								<Text>
									{val.name} itemId:{val.id}
								</Text>
								<Line />
								<ProgressContent>
									<Progress percent={val.progress_percentage} />
									<SettingIcon />
								</ProgressContent>
							</CardChild>
						</div>
					)}
				</Draggable>
			))}
		</>
	);
};

export default CardItem;
