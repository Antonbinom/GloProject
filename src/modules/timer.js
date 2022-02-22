const timerModule = (deadline) => {
	const timerDays = document.querySelector('#timer-days');
	const timerHours = document.querySelector('#timer-hours');
	const timerMinutes = document.querySelector('#timer-minutes');
	const timerSeconds = document.querySelector('#timer-seconds');

	// функция расчета времени до дэдлайна
	const getTimeRemeining = () => {
		let dateStop = new Date(deadline).getTime(); // миллисекунд до дэдлайна
		let dateNow = new Date().getTime(); // милисекунд до сейчас
		let timeRemaining = (dateStop - dateNow) / 1000; // разница между дэдлайном и сейчас приведенная к секундам
		let days = Math.floor(timeRemaining / 60 / 60 / 24); // переводим в дни округленно
		let hours = Math.floor(timeRemaining / 60 / 60) % 24; // переводим в часы округленно
		let minutes = Math.floor(timeRemaining / 60) % 60; // переводим в минуты округленно и выводим остаток
		let seconds = Math.floor(timeRemaining % 60); // тоже самое

		// возвращаем значения. по новым стандартам можно использовать только ключ
		return {
			timeRemaining, // передаем время до дэдлайна в секундах
			days,
			hours,
			minutes,
			seconds
		};
	};

	// функция вывода дэдлайна на страницу
	const updateClock = () => {

		let getTime = getTimeRemeining(); // запускаем расчеты


		// проверка
		if (getTime.days % 10 > 1 && getTime.days % 10 < 5) timerDays.textContent = getTime.days + ' дня /';
		else if (days % 10 == 1 && getTime.days != 11) timerDays.textContent = getTime.days + ' день /';
		else timerDays.textContent = getTime.days + ' дней /';

		if (getTime.hours >= 0 && getTime.hours < 10) timerHours.textContent = '0' + getTime.hours + ' ч';
		else timerHours.textContent = getTime.hours + ' ч';
		if (getTime.minutes >= 0 && getTime.minutes < 10) timerMinutes.textContent = '0' + getTime.minutes + ' м';
		else timerMinutes.textContent = getTime.minutes + ' м';
		if (getTime.seconds >= 0 && getTime.seconds < 10) timerSeconds.textContent = '0' + getTime.seconds + ' с';
		else timerSeconds.textContent = getTime.seconds + ' с';

		// проверка на отрицательное значение
		if (getTime.timeRemaining > 0) setTimeout(updateClock, 1000);
	};

	updateClock();
};

export default timerModule;