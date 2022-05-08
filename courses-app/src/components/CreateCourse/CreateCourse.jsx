import React, { useState } from 'react';

import { Button, Input } from '../../common';

import { BUTTON_TEXT } from '../../constants';

import { generateDate } from '../../helpers/dateGenerator';
import { convertMinutesToHoursAndMinutes } from '../../helpers/pipeDuration';

import {
	AddAuthorBlock,
	AuthorItem,
	AuthorsBlock,
	AuthorsContainer,
	AuthorsLeftSection,
	AuthorsList,
	AuthorsRightSection,
	CreateCourseForm,
	DescriptionBlock,
	DurationBlock,
	DurationTimer,
	InputContainer,
	TextArea,
	TitleBlock,
} from './CreateCourse.styles';

const initialFormValue = {
	title: '',
	description: '',
	authors: [],
	duration: convertMinutesToHoursAndMinutes(0),
};

export const CreateCourse = ({
	authorsList,
	setAuthorsList,
	setCourses,
	setShowCourseAddMenu,
}) => {
	const [formValue, setFormValue] = useState(initialFormValue);
	const [newAuthor, setNewAuthor] = useState({ name: '' });
	const { title, description, authors, duration } = formValue;

	const submitForm = (event) => {
		event.preventDefault();

		setCourses((previousCourses) => [
			...previousCourses,
			{
				...formValue,
				id: Date.now().toString(),
				creationDate: generateDate(),
			},
		]);

		setShowCourseAddMenu((prev) => !prev);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormValue({ ...formValue, [name]: value });
	};

	const addAuthor = (author) => {
		if (!authors.find((formAuthor) => formAuthor.id === author.id)) {
			setFormValue({
				...formValue,
				authors: [...formValue.authors, author.id],
			});
		}
	};

	const removeAuthor = (author) => {
		setFormValue({
			...formValue,
			authors: authors.filter((formAuthor) => formAuthor !== author.id),
		});
	};

	const handleNewAuthorNameChange = (event) => {
		setNewAuthor({ ...newAuthor, name: event.target.value });
	};

	const addNewAuthorHandler = (author) => {
		setAuthorsList((prevAuthors) => [
			...prevAuthors,
			{ ...author, id: Date.now().toString() },
		]);

		setNewAuthor({ name: '' });
	};

	const handleDurationValueChange = (event) => {
		setFormValue({
			...formValue,
			duration: convertMinutesToHoursAndMinutes(event.target.value),
		});
	};

	return (
		<CreateCourseForm onSubmit={submitForm}>
			<TitleBlock>
				<InputContainer>
					<Input
						labelText='Title'
						type='text'
						name='title'
						placeholder='Enter title...'
						required
						value={title}
						onChange={handleChange}
					/>
				</InputContainer>
				<Button type='submit'>{BUTTON_TEXT.CREATE_COURSE}</Button>
			</TitleBlock>

			<DescriptionBlock>
				<label>
					Description
					<TextArea
						name='description'
						type='text'
						placeholder='Enter description...'
						rows='5'
						required
						value={description}
						onChange={handleChange}
					/>
				</label>
			</DescriptionBlock>

			<AuthorsContainer>
				<AuthorsLeftSection>
					<AddAuthorBlock>
						<h2>Add author</h2>
						<Input
							labelText='Author name'
							type='text'
							placeholder='Enter author name...'
							value={newAuthor.name}
							onChange={handleNewAuthorNameChange}
						/>
						<Button
							type='button'
							onClick={() => addNewAuthorHandler(newAuthor)}
						>
							{BUTTON_TEXT.CREATE_AUTHOR}
						</Button>
					</AddAuthorBlock>

					<DurationBlock>
						<h2>Duration</h2>
						<Input
							type='number'
							labelText='Duration'
							placeholder='Enter duration in minutes...'
							onChange={handleDurationValueChange}
						/>
						<DurationTimer>
							Duration: <span>{duration}</span> hours
						</DurationTimer>
					</DurationBlock>
				</AuthorsLeftSection>

				<AuthorsRightSection>
					<AuthorsBlock>
						<h2>Authors</h2>
						<AuthorsList>
							{authorsList.map((author) => (
								<AuthorItem key={author.id}>
									{author.name}
									<Button type='button' onClick={() => addAuthor(author)}>
										{BUTTON_TEXT.ADD_AUTHOR}
									</Button>
								</AuthorItem>
							))}
						</AuthorsList>
					</AuthorsBlock>

					<AuthorsBlock>
						<h2>Course authors</h2>
						{authors.length ? (
							authorsList
								.filter((author) =>
									authors.find((courseAuthor) => courseAuthor === author.id)
								)
								.map((author) => (
									<AuthorItem key={author.id}>
										{author.name}
										<Button type='button' onClick={() => removeAuthor(author)}>
											{BUTTON_TEXT.REMOVE_AUTHOR}
										</Button>
									</AuthorItem>
								))
						) : (
							<p>Author list is empty</p>
						)}
					</AuthorsBlock>
				</AuthorsRightSection>
			</AuthorsContainer>
		</CreateCourseForm>
	);
};
