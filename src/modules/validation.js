export const validation = () => {

	document.body.addEventListener('input', (e) => {
		if (e.target.name === 'user_name') {
			e.target.value = e.target.value.replace(/[^а-я\ ]/gi, "");
		} else if (e.target.name === 'user_email') {
			e.target.value = e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]/gi, "");
		} else if (e.target.name === 'user_phone') {
			e.target.value = e.target.value.replace(/[^0-9()\-\+]/gi, "");
		} else if (e.target.name === 'user_message') {
			e.target.value = e.target.value.replace(/[^а-я0-9\ \.\,]/gi, "");
		} else if (e.target.matches('input') && e.target.classList.contains('calc-item')) {
			e.target.value = e.target.value.replace(/\D+/g, "");
		}
	});
};