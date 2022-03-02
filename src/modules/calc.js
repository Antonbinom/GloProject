const calc = () => {

	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcCount = document.querySelector('.calc-count');
	const calcDay = document.querySelector('.calc-day');
	const total = document.getElementById('total');

	const totalValueAnimation = (value) => {
		let count = 1;
		let time;
		if (value <= 100) time = 3;
		else if (value <= 1000) time = 3;
		else if (value < 10000) time = 1;

		const interval = setInterval(() => {
			count++;
			if (count == value) clearInterval(interval);
			total.textContent = count;
		}, time);
	};

	const countCalc = () => {
		let totalValue = 0
		let calcCountValue = 1;
		let calcDayValue = 1;

		if (calcCount.value > 1) calcCountValue += +calcCount.value / 10;

		if (calcDay.value < 5 && calcDay.value) calcDayValue = 2;
		else if (calcDay.value < 10 && calcDay.value) calcDayValue = 1.5;

		if (calcType.value && calcSquare.value) {
			totalValue = +(calcType.value * calcSquare.value * calcCountValue * calcDayValue);
			totalValueAnimation(totalValue);

		} else totalValue = 0;

	};

	calcBlock.addEventListener('change', (e) => {
		if (e.target === calcType || e.target === calcSquare ||
			e.target === calcCount || e.target === calcDay) {
			countCalc();
		}
	});
};

export default calc;