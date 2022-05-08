import React from 'react';

import { Button } from '../../../../common';

import { BUTTON_TEXT } from '../../../../constants';
import { convertMinutesToHoursAndMinutes } from '../../../../helpers/pipeDuration';

import {
	Author,
	ButtonContainer,
	CardSection,
	CourseCardBlock,
	CourseDescription,
	CourseInfo,
	CourseInfoItem,
	CourseTitle,
} from './CourseCard.styles';

export const CourseCard = ({ course, authorsList }) => {
	const { title, description, authors, duration, creationDate } = course;

	const filteredUsers = authorsList
		.filter((author) =>
			authors.find((courseAuthor) => courseAuthor === author.id)
		)
		.map((author) => author.name)
		.join(', ');

	return (
		<CourseCardBlock>
			<CardSection>
				<CourseTitle>{title}</CourseTitle>
				<CourseDescription>{description}</CourseDescription>
			</CardSection>

			<CardSection>
				<CourseInfo>
					<CourseInfoItem>
						<span>Authors:</span>
						<Author>{filteredUsers}</Author>
					</CourseInfoItem>

					<CourseInfoItem>
						<span>Duration: </span>
						{convertMinutesToHoursAndMinutes(duration)} hours
					</CourseInfoItem>

					<CourseInfoItem>
						<span>Created: </span>
						{creationDate}
					</CourseInfoItem>
				</CourseInfo>

				<ButtonContainer>
					<Button>{BUTTON_TEXT.SHOW_COURSE}</Button>
				</ButtonContainer>
			</CardSection>
		</CourseCardBlock>
	);
};
