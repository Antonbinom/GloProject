const tabs = () => {

	const tabPanel = document.querySelector('.service-header');
	const tabs = tabPanel.querySelectorAll('.service-header-tab');
	const tabContent = document.querySelectorAll('.service-tab');


	tabPanel.addEventListener('click', (e) => { // при клике в области панели с табами
		if (e.target.closest('.service-header-tab')) { // если элемент ближайший потомок service-header-tab
			const tabBtn = e.target.closest('.service-header-tab'); // собъявляем переменную с этим условием
			tabs.forEach((tab, index) => { // перебираем все кнопки табы
				if (tab === tabBtn) { // если кнопка блиайший родственник tabBtn
					tab.classList.add('active'); // делаем активной
					tabContent[index].classList.remove('d-none'); // контент с таким же индексом делаем видимым
				} else { // остальное наоборот
					tab.classList.remove('active');
					tabContent[index].classList.add('d-none');
				}
			});
		}
	});

};

export default tabs;