import styled from 'styled-components';

export const BaseButton = styled.button`
	cursor: pointer;
	padding: 10px 24px;
	border: 2px solid purple;
	outline: none;
	background-color: snow;
	white-space: nowrap;

	&:hover {
		background-color: purple;
		color: white;
	}
`;
