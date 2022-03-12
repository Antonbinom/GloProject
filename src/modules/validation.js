export const validation = () => {
	const form = document.querySelectorAll('[name=user_form]');

	// добавляем каласс success
	const success = (item) => {
		item.classList.add('success');
		item.style.boxShadow = "0 0px 10px #00a1ff";
	};
	// удаляем класс success
	const denied = (item) => {
		item.classList.remove('success');
		item.classList.add('denied');
		item.style.boxShadow = "0 0px 10px #f9209f";
	};
	// удаляем все допю классы и подсветку
	const empty = (item) => {
		item.classList.remove('success');
		item.classList.remove('denied');
		item.style.boxShadow = "";
	}
	// проверка на валидность
	const checkInput = (input, reg) => {
		let item = input.value;
		let valid = reg.test(item);
		if (valid) success(input);
		else if (input.value == 0) empty(input);
		else denied(input);
		return valid;
	};

	// запрет на ввод символов
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

	// валидация полей
	form.forEach((item) => {
		item.addEventListener('change', (e) => {
			if (e.target.name === 'user_phone') {
				let reg = /^\d[\d\(\)\ -]{4,15}\d$/;
				checkInput(e.target, reg);

			} else if (e.target.name === 'user_email') {
				let reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
				checkInput(e.target, reg);

			} else if (e.target.name === 'user_name') {
				e.target.value = e.target.value.trim().toLowerCase().replace(/([\-\ ]|^)([а-яё])/g, (str) => {
					return str.toUpperCase();
				});
				let reg = /^[а-яА-Я\ ]{2,15}$/;
				checkInput(e.target, reg);

			} else if (e.target.name === 'user_message') {
				e.target.value = e.target.value.trim()
				let reg = /^[а-яА-Я\ \-]{5,150}$/;
				checkInput(e.target, reg);
			}
		});
	});
};