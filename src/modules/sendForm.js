export const sendForm = ({
	formName
}) => {
	const forms = document.querySelectorAll(formName); // получаем форму
	const statusBlock = document.createElement('div');
	const errorText = 'Ошибка...';
	const successText = 'Спасибо! Наш менеджер с вами свяжемся!';
	const invalidText = 'Не верно заполнены поля!';

	const validate = (list) => {
		let success = true;

		list.forEach(input => {
			if (!input.classList.contains('success')) {
				success = false;
			}
		});

		return success;
	};

	const addMessage = (form) => {
		statusBlock.textContent = '';
		statusBlock.classList.add('loader');
		statusBlock.style.display = "block";
		form.append(statusBlock);
	};

	const successMessage = () => {
		statusBlock.classList.remove('loader');
		statusBlock.style.color = 'white';
		statusBlock.textContent = successText;
		setTimeout(() => statusBlock.style.display = "none", 2000);
	};
	const invalideMessage = () => {
		statusBlock.style.display = "block";
		statusBlock.style.color = 'red';
		statusBlock.textContent = invalidText;
		setTimeout(() => statusBlock.style.display = "none", 4000);
	};

	const sendData = (data) => { // функция отправки формы
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST', // метод отправить
			body: JSON.stringify(data), // тело внутри которого преобразуем в нужный формат передаваемую информацию
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json()); // после успешной отправки переводим данные в формат json
	};

	const submitForm = (form) => {
		const formElements = form.querySelectorAll('input');
		const formData = new FormData(form); // создадим экземпляр FormData и передадим в нее нашу форму
		const formBody = {}; // будем передавать пустой formBody

		addMessage(form);

		formData.forEach((val, key) => { // переберем formData
			formBody[key] = val; // с каждой итерацией будем обращаться к formBody и будем записывать в него свойство ключ и значение
		});

		console.log('submit');

		if (validate(formElements)) {
			sendData(formBody)
				.then(data => {
					console.log(data);
					successMessage();
					formElements.forEach(input => {
						input.value = '';
						input.classList.remove('success');
						input.style.boxShadow = "";
					});
				})
				.catch(error => {
					console.log(error)
					statusBlock.textContent = errorText;
				});
		} else {
			invalideMessage();
			statusBlock.classList.remove('loader');
		}
	};

	forms.forEach((form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			submitForm(form);
		});
	});
};