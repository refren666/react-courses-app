import styled from 'styled-components';

export const CustomInput = styled.input`
	background-color: white;
	font-size: 15px;
	padding: 10px 10px 10px 5px;
	display: block;
	border-radius: 0;
	border: 1px solid orange;
	width: 100%;

	&:focus {
		outline: none;
	}
`;

export const Group = styled.div`
	position: relative;
	width: 100%;
`;
