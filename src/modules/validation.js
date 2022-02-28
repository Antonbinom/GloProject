const validationModule = () => {

	const calcBlock = document.querySelector('.calc-block');
	const calcInputs = calcBlock.querySelectorAll('input');
	const inputText = document.querySelectorAll('[name="user_message"], [name="user_name"]');
	const inputPhone = document.querySelectorAll('[type="tel"]');
	const inputEmail = document.querySelectorAll('[type="email"]');
	const userFormInputs = document.querySelectorAll('[name="user_form"] input');

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
			e.target.value = e.target.value.replace(/([\-\ ]|^)[а-яё]/g, function (u) {
				return u.toUpperCase();
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

	userFormInputs.forEach((item) => {
		item.addEventListener('blur', (e) => {
			e.target.value = e.target.value.replace(/^\-+|\-+$/g, '').replace(/([\s\-])+/g, (str, $1) => {
				return $1;
			});
		});
	});
};

export default validationModule;