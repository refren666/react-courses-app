export const convertMinutesToHoursAndMinutes = (duration) => {
	// if duration is in format hh:mm then just return it
	if (duration.toString().match(/^(1[0-2]|0?[1-9]):[0-5][0-9]$/)) {
		return duration;
	}

	const hours = Math.trunc(duration / 60);
	const minutes = Math.ceil(((duration / 60) % 1) * 60);

	return `${hours < 10 ? '0' + hours : hours}:${
		minutes < 10 ? '0' + minutes : minutes
	}`;
};
