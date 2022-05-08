import React, { useState } from 'react';

import { MOCKED_AUTHORS_LIST, MOCKED_COURSES_LIST } from '../../constants';

import { CourseCard } from './components/CourseCard';
import { SearchBar } from './components/SearchBar';
import { CreateCourse } from '../CreateCourse';

import { CoursesContainer } from './Courses.styles';

export const Courses = () => {
	const [courses, setCourses] = useState(MOCKED_COURSES_LIST);
	const [authorsList, setAuthorsList] = useState(MOCKED_AUTHORS_LIST);
	const [showCourseAddMenu, setShowCourseAddMenu] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const filteredCourses = courses.filter((course) => {
		return (
			course.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			course.id === searchValue
		);
	});

	return showCourseAddMenu ? (
		<CreateCourse
			authorsList={authorsList}
			setAuthorsList={setAuthorsList}
			setCourses={setCourses}
			setShowCourseAddMenu={setShowCourseAddMenu}
		/>
	) : (
		<CoursesContainer>
			<SearchBar
				setSearchValue={setSearchValue}
				setShowCourseAddMenu={setShowCourseAddMenu}
			/>

			{filteredCourses.map((course) => (
				<CourseCard key={course.id} course={course} authorsList={authorsList} />
			))}
		</CoursesContainer>
	);
};
