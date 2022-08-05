import styled from '@emotion/styled';
import { colors } from '@/utils/Constants';

const LayoutWrapper = styled.section`
	width: 100vw;
	height: 100%;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	height: 64px;
	padding: 0 64px;
	background-color: #ffffff;

	border-bottom: 1px solid ${colors.neutral40};
	top: 0;
	z-index: 2;
`;

const Content = styled.main`
	display: flex;
	justify-content: center;
	margin: 120px auto;
	width: 100%;
	height: 100%;
`;

const Footer = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const CardStyled = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 8px;
	grid-row-gap: 8px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 8px;
	width: 350px;
	padding: 16px;
	border-radius: 4px;
	border: ${colors.primaryMain} solid 1px;
	background-color: ${colors.primarySurface};
`;

const CardChild = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	gap: 8px;
	width: 100%;
	height: auto;
	background: ${colors.neutral20};
	border: 1px solid ${colors.neutral40};
	border-radius: 4px;
`;

const Text = styled.div`
	text-align: start;
	font-size: 14px;
	font-weight: 700;
	font-style: normal;
	line-height: 24px;
	color: ${colors.neutral90};
`;

const Line = styled.div`
	width: 100%;
	margin: auto;
	height: 0px;
	border: 1px dashed ${colors.neutral40};
`;

const ProgressContent = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: nowrap;
	gap: 12px;
`;

const Tag = styled.span`
	font-size: 12px;
	font-weight: 400;
	box-sizing: border-box;
	list-style: none;
	font-feature-settings: 'tnum';
	display: inline-block;
	height: auto;
	margin: 0 8px 0 0;
	padding: 0 7px;
	font-size: 12px;
	line-height: 20px;
	white-space: nowrap;
	border-radius: 4px;
	opacity: 1;
	transition: all 0.3s;

	color: ${colors.primaryMain};
	background: ${colors.primarySurface};
	border: 1px solid ${colors.primaryBorder};
`;

const TextDesc = styled.p`
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 12px;
	line-height: 20px;
	color: ${colors.neutral90};
`;

export {
	Card,
	CardChild,
	CardStyled,
	Content,
	Header,
	Footer,
	LayoutWrapper,
	Line,
	ProgressContent,
	Tag,
	Text,
	TextDesc,
};
