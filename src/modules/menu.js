const menuModule = () => {
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	const closeBtn = menu.querySelector('.close-btn');
	const downBtn = document.querySelector('[href="#service-block"]');
	const menuItems = menu.querySelectorAll('ul>li>a');

	// скрыть/показать меню
	const menuActive = () => {
		menu.classList.toggle('active-menu');
	};

	menuBtn.addEventListener('click', menuActive);
	closeBtn.addEventListener('click', menuActive);

	// Усложненное задание

	// прокрутка к следующему блоку после нажатия на кнопку вниз
	downBtn.addEventListener('click', event => {
		event.preventDefault();
		const nextBlockId = downBtn.getAttribute('href');
		document.querySelector(nextBlockId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});

	// плавный скролл к блокам при нажатии на пункты меню
	menuItems.forEach(menuItem => menuItem.addEventListener('click', menuActive));
	menuItems.forEach(link => {
		link.addEventListener('click', event => {
			event.preventDefault();
			const blockID = link.getAttribute('href');
			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});
};

export default menuModule;