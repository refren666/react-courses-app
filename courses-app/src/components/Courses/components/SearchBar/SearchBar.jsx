import React, { useState } from 'react';

import { Button, Input } from '../../../../common';

import { BUTTON_TEXT } from '../../../../constants';

import { SearchBarContainer, SearchField } from './SearchBar.styles';

export const SearchBar = ({ setShowCourseAddMenu, setSearchValue }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (event) => setInputValue(event.target.value);

	return (
		<SearchBarContainer>
			<SearchField>
				<Input
					type='text'
					placeholder='Enter course name...'
					value={inputValue}
					onChange={handleChange}
				/>

				<Button onClick={() => setSearchValue(inputValue)}>
					{BUTTON_TEXT.SEARCH}
				</Button>
			</SearchField>

			<Button onClick={() => setShowCourseAddMenu((prev) => !prev)}>
				{BUTTON_TEXT.ADD_NEW_COURSE}
			</Button>
		</SearchBarContainer>
	);
};
