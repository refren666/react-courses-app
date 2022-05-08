import React from 'react';

import { BaseButton } from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
	BASE: 'base',
};

export const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE) =>
	({
		[BUTTON_TYPE_CLASSES.BASE]: BaseButton,
	}[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return <CustomButton {...otherProps}>{children}</CustomButton>;
};
