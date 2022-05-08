import styled from 'styled-components';

export const Author = styled.div`
	display: inline-block;
	font-weight: normal;
	white-space: nowrap;
	max-width: 60%;

	overflow: hidden;
	text-overflow: ellipsis;
`;

export const ButtonContainer = styled.div`
	text-align: center;
`;

export const CardSection = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 15px;
`;

export const CourseCardBlock = styled.div`
	border: 3px solid green;
	display: flex;
	justify-content: space-between;
	margin: 25px 0;
	padding: 20px;

	${CardSection}:nth-child(1) {
		width: 70%;
		padding-right: 15px;
	}

	${CardSection}:nth-child(2) {
		width: 30%;
		padding-left: 15px;
	}
`;

export const CourseTitle = styled.h2`
	font-size: 2rem;
	letter-spacing: 0.5;
`;

export const CourseDescription = styled.div`
	font-size: 0.9rem;
	letter-spacing: 0.5;
`;

export const CourseInfo = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 5px;
`;

export const CourseInfoItem = styled(CourseDescription)`
	display: flex;
	align-items: center;
	column-gap: 10px;

	span {
		font-weight: bold;
	}
`;
