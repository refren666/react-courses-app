import React from 'react';

import { LogoContainer, MyLogo } from './Logo.styles';

export const Logo = ({ logo, alt }) => (
	<LogoContainer>
		<MyLogo src={logo} alt={alt} />
	</LogoContainer>
);
