const validationModule = () => {

	const calcBlock = document.querySelector('.calc-block');
	const calcInputs = calcBlock.querySelectorAll('input');
	const inputMessage = document.querySelector('.mess');
	const inputPhone = document.querySelectorAll('[type="tel"]');
	const inputEmail = document.querySelectorAll('[type="email"]');

	calcInputs.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/g, "");
		});
	});

	inputMessage.addEventListener('input', (e) => {
		e.target.value = e.target.value.replace(/[^а-я -]/gi, "");
	});
	inputPhone.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^0-9()-]/gi, "");
		});
	});
	inputEmail.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]/gi, "");
		});
	});

};

export default validationModule;