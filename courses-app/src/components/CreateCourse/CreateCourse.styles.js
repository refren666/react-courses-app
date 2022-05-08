import styled from 'styled-components';

export const TitleBlock = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
`;

export const InputContainer = styled.div`
	width: 30%;
`;

export const TextArea = styled.textarea`
	width: 100%;
	border: 1px solid yellow;
	font-size: 15px;
	padding: 10px 10px 10px 5px;

	&:focus {
		outline: none;
	}
`;

export const DescriptionBlock = styled.div`
	margin: 20px 0;
`;

export const CreateCourseForm = styled.form`
	border: 3px solid steelblue;
	padding: 25px 15px;
`;

export const AddAuthorBlock = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	margin-bottom: 20px;

	button,
	h2 {
		align-self: center;
	}
`;

export const AuthorsLeftSection = styled.section`
	width: 40%;
	padding-right: 30px;
`;

export const DurationBlock = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 15px;

	h2 {
		align-self: center;
	}
`;

export const DurationTimer = styled.div`
	font-size: 2.2rem;

	span {
		font-weight: bold;
	}
`;

export const AuthorsRightSection = styled.section`
	padding-left: 30px;
	width: 40%;
`;

export const AuthorsBlock = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 15px;

	h2,
	p {
		align-self: center;
	}
`;

export const AuthorsList = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export const AuthorItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const AuthorsContainer = styled.div`
	display: flex;
	border: 3px solid black;
	padding: 25px 15px;
`;
