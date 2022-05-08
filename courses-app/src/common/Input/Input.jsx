import React from 'react';

import { CustomInput, Group } from './Input.styles';

export const Input = React.forwardRef(({ labelText, ...props }, ref) => {
	return (
		<Group>
			<label>
				{labelText}
				<CustomInput ref={ref} {...props} />
			</label>
		</Group>
	);
});
