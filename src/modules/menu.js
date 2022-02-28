const menu = () => {
	const menuBtn = document.querySelector('.menu');
	const menu = document.querySelector('menu');
	const closeBtn = menu.querySelector('.close-btn');
	const downBtn = document.querySelector('[href="#service-block"]');
	const menuItems = menu.querySelectorAll('ul>li>a');
	console.log(menuItems);
	// скрыть/показать меню
	const menuActive = () => {
		menu.classList.toggle('active-menu');
	};

	menuBtn.addEventListener('click', menuActive);

	menu.addEventListener('click', (e) => { // при клике на область меню
		if (e.target === closeBtn) { // если причина события closeBtn
			menuActive();
		} else if (e.target.matches('a')) { // если является тэгом a
			e.preventDefault();
			// menuActive();
			menuItems.forEach((link, index) => {
				console.log(link[3]);
				const blockId = link.getAttribute('href');
				// document.querySelector(blockId).scrollIntoView({
				// 	behavior: 'smooth',
				// 	block: 'start'
				// });
			});
		}
	});

	// menuItems.forEach(link => {
	// 	link.addEventListener('click', event => {
	// 		// event.preventDefault();
	// 		const blockID = link.getAttribute('href');
	// 		document.querySelector(blockID).scrollIntoView({
	// 			behavior: 'smooth',
	// 			block: 'start'
	// 		});
	// 	});
	// });

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

};

export default menu;