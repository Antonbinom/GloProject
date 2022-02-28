const validationModule = () => {

	const calcBlock = document.querySelector('.calc-block');
	const calcInputs = calcBlock.querySelectorAll('input');
	const inputText = document.querySelectorAll('[name="user_message"], [name="user_name"]');
	const inputPhone = document.querySelectorAll('[type="tel"]');
	const inputEmail = document.querySelectorAll('[type="email"]');

	calcInputs.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/\D+/g, "");
		});
	});

	inputText.forEach((item) => {
		item.addEventListener('input', (e) => {
			e.target.value = e.target.value.replace(/[^а-я\ \-\.\,]/gi, "");
		});
		item.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/(^[\s\-]{0,})([\ \-])+/g, (str, $1, $2) => {
				return $2;
			});
		});
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