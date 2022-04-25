import {
	animate
} from "./helper";

export const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block');
	const calcItem = document.querySelector('.calc-item');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const total = document.getElementById('total');

	// функция отсрочка вызова
	const debounce = (callback, input) => { // передаем функцию countCalc и инпуты
		if (input.matches('select') || input.matches('input')) {
			let timeout; // создаем счетчик
			return (argument) => { // возвращаем функцию вместе с ее аргументом
				clearTimeout(timeout); // Сбрасываем запуск функции
				timeout = setTimeout(callback, 1000, argument); // Помещаем в функцию timeout функцию переданную в качестве аргумента в debounce
			};
		}
	}

	// производим расчеты
	const countCalc = () => {
		let totalValue;
		let calcCountValue = 1;
		let calcDayValue = 1;

		// получаем значение селекта
		const calcTypeValue = calcType.options[calcType.selectedIndex].value;
		// значение инпута
		const calcSquareValue = +calcSquare.value;
		// если количество помещений более одного
		if (calcCount.value > 1) calcCountValue += +calcCount.value / 10;
		// если количество дней менее 5
		if (calcDay.value < 5 && calcDay.value) calcDayValue = 2;
		// если же менее 10
		else if (calcDay.value < 10 && calcDay.value) calcDayValue = 1.5;
		// если выбран тип объекта и указана площадь
		if (calcType.value && calcSquare.value) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
			// let newTotalValue = [];
			// newTotalValue.push(totalValue);

		} else totalValue = 0;
		let oldTotal = +total.textContent;
		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				if (oldTotal == 0) {
					total.textContent = Math.round(progress * (oldTotal + totalValue));
				} else if (totalValue > oldTotal) {
					total.textContent = Math.round((progress * (totalValue - oldTotal) + oldTotal));
				} else if (totalValue < oldTotal) {
					total.textContent = Math.round((oldTotal - progress * (oldTotal - totalValue)));
				}
			}
		});
	};

	const debouncedOnInput = debounce(countCalc, calcItem);
	calcBlock.addEventListener('change', debouncedOnInput);
};