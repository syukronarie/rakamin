/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */

import { useHover } from '@/hooks';
import { colors } from '@/utils/Constants';

function SettingIcon() {
	const [hovered, eventHandlers] = useHover();
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
			/* @ts-ignore */
			{...eventHandlers}
		>
			<rect
				width="24"
				height="24"
				fill={hovered ? `${colors.neutral30}` : `${colors.neutral20}`}
				rx="4"
			></rect>
			<path
				stroke="#757575"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M19 13a1 1 0 100-2 1 1 0 000 2zM12 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"
			></path>
		</svg>
	);
}

export default SettingIcon;
