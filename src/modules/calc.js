const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const total = document.getElementById('total');
	let interval;
	const totalValueAnimation = (value) => {
		let count = 0;
		let step = value / 100;

		interval = setInterval(() => {
			count += step;
			if (count == value) clearInterval(interval);
			total.textContent = count;
		}, 1);
	};

	const countCalc = () => {
		const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
		const calcSquareValue = calcSquare.value;

		let totalValue = 0
		let calcCountValue = 1;
		let calcDayValue = 1;

		if (calcCount.value > 1) calcCountValue += +calcCount.value / 10;

		if (calcDay.value < 5 && calcDay.value) calcDayValue = 2;
		else if (calcDay.value < 10 && calcDay.value) calcDayValue = 1.5;

		if (calcType.value && calcSquare.value) {
			totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
			totalValueAnimation(totalValue);

		} else totalValue = 0;

	};

	calcBlock.addEventListener('change', (e) => {
		if (e.target === calcType || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
			clearInterval(interval);
			countCalc();
		}
	});
};

export default calc;