import { Progress } from 'antd';
import { SettingIcon } from '@/assets';
import { CardChild, Line, ProgressContent, Text } from './styled';

// type Item = {
// 	id: number;
// 	name: string;
// 	done: boolean | null;
// 	todo_id: number;
// 	created_at: string;
// 	updated_at: string;
// 	progress_percentage: number;
// };

interface CardItem {
	id: number;
}

const CardItem: React.FC<CardItem> = (props) => {
	return (
		<CardChild>
			<Text>Re-designed the zero-g doggie bags. No more spills!</Text>
			<Line />
			<ProgressContent>
				<Progress percent={80} />
				<SettingIcon />
			</ProgressContent>
		</CardChild>
	);
};

export default CardItem;
