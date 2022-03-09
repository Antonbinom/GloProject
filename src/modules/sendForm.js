const sendForm = ({
	formName
}) => {
	const forms = document.querySelectorAll(formName); // получаем форму
	const statusBlock = document.createElement('div');
	const loadText = 'Загрузка...';
	const errorText = 'Ошибка...';
	const successText = 'Спасибо! Наш менеджер с вами свяжемся!';

	const validate = (list) => {
		let success = true;

		return success;
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
		statusBlock.textContent = '';
		statusBlock.classList.add('loader');
		form.append(statusBlock);

		formData.forEach((val, key) => { // переберем formData
			formBody[key] = val; // с каждой итерацией будем обращаться к formBody и будем записывать в него свойство ключ и значение
		});

		console.log('submit');

		if (validate(formElements)) {
			sendData(formBody)
				.then(data => {
					statusBlock.classList.remove('loader');
					statusBlock.textContent = successText;

					formElements.forEach(input => {
						input.value = '';
					});
				})
				.catch(error => {
					statusBlock.textContent = errorText;
				});
		} else {
			alert('Данные не валидны!!!');
		}
	};

	forms.forEach((form) => {
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			submitForm(form);
		});
	});
};

export default sendForm;