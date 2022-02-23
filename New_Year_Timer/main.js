'use strict';

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
	if (date < 9 && date > 4) console.log('Доброе утро');
	else if (date < 18 && date > 12) console.log('Добрый день');
	else if (date < 23 && date > 18) console.log('Добрый вечер');
	else console.log('Доброй ночи');
}
setTime(date.getHours());

// Сегодня: Понедельник
console.log('Сегодня: ' + today);

// выоводит дату точно в таком виде Текущее время: 12:05:15 PM
if (hours < 12 && hours >= 0) console.log('Текущее время: ' + date.toLocaleTimeString() + ' AM');
else console.log('Текущее время: ' + date.toLocaleTimeString() + ' PM');

const newYearTimer = (dayX) => {
	let dayNow = new Date().getTime();
	let newYear = new Date(dayX).getTime();

	// До нового года осталось 312 дней
	let timeRemaining = (newYear - dayNow) / 1000;
	let days = Math.ceil(timeRemaining / 60 / 60 / 24);
	console.log(days);
};
newYearTimer('01 January 2023');