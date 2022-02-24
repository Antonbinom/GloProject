'use strict';

const hello = document.querySelector('.hello');
const todayText = document.querySelector('.today');
const time = document.querySelector('.time');
const timer = document.querySelector('.timer');
let helloText;

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let options = {
	weekday: 'long',
};
let today = new Intl.DateTimeFormat('ru-RU', options).format(date);
// let newYear = new Date(2023, 1, 1);

//Добрый день(утро, вечер, ночь в зависимости от времени суток)
const setTime = (date) => {
	if (date < 9 && date > 4) helloText = 'Доброе утро';
	else if (date < 18 && date > 12) helloText = 'Добрый день';
	else if (date < 23 && date > 18) helloText = 'Добрый вечер';
	else helloText = 'Доброй ночи';
	hello.textContent = helloText;
};
setTime(date.getHours());

// Сегодня: Понедельник
todayText.textContent = 'Сегодня: ' + today;

// выоводит дату точно в таком виде Текущее время: 12:05:15 PM
if (hours < 12 && hours >= 0) time.textContent = 'Текущее время: ' + date.toLocaleTimeString() + ' AM';
else time.textContent = 'Текущее время: ' + date.toLocaleTimeString() + ' PM';

const newYearTimer = (dayX) => {
	let dayNow = new Date().getTime();
	let newYear = new Date(dayX).getTime();

	// До нового года осталось 312 дней
	let timeRemaining = (newYear - dayNow) / 1000;
	let days = Math.ceil(timeRemaining / 60 / 60 / 24);
	timer.textContent = 'До нового года осталось ' + days + ' дней';
};
newYearTimer('01 January 2023');