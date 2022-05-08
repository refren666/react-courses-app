import styled from 'styled-components';

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 50px 0;
	padding: 25px 15px;
	background-color: white;
	border: 3px solid lightcoral;
`;

export const AuthWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 50px;
`;

export const UserName = styled.p`
	font-size: 1.1rem;
	font-weight: 500;
`;
