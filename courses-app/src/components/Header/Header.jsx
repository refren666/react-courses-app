import React from 'react';

import RefrenLogo from '../../assets/logo-transparent.png';
import { BUTTON_TEXT, USERNAME } from '../../constants';

import { Logo } from './components/Logo';
import { Button } from '../../common';

import { AuthWrapper, HeaderContainer, UserName } from './Header.styles';

export const Header = () => {
	return (
		<HeaderContainer>
			<Logo logo={RefrenLogo} alt={'logo'} />

			<AuthWrapper>
				<UserName>{USERNAME}</UserName>
				<Button>{BUTTON_TEXT.LOGOUT}</Button>
			</AuthWrapper>
		</HeaderContainer>
	);
};
