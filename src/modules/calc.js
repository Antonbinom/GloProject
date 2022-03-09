import {
	animate
} from "./helper";

export const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const total = document.getElementById('total');

	const countCalc = () => {
		let totalValue = 0
		let calcCountValue = 1;
		let calcDayValue = 1;

		const calcTypeValue = calcType.options[calcType.selectedIndex].value;
		const calcSquareValue = +calcSquare.value;

		if (calcCount.value > 1) calcCountValue += +calcCount.value / 10;

		if (calcDay.value < 5 && calcDay.value) calcDayValue = 2;
		else if (calcDay.value < 10 && calcDay.value) calcDayValue = 1.5;

		if (calcType.value && calcSquare.value) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;

		} else totalValue = 0;
		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				total.textContent = Math.round(progress * totalValue);
			}
		});
	};

	calcBlock.addEventListener('change', (e) => {
		if (e.target.matches('select') || e.target.matches('input')) {
			countCalc();
		}
	});
};