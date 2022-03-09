export const menu = () => {
	const menu = document.querySelector('menu');
	const body = document.querySelector('body');

	const menuActive = () => {
		menu.classList.toggle('active-menu');
	};

	body.addEventListener('click', (e) => {
		if (e.target.closest('.menu')) menuActive();
		else if (e.target.matches('menu')) return;
		else if (e.target.classList.contains('close-btn')) menuActive();
		else if (e.target.matches('ul>li>a')) {
			e.preventDefault();
			const blockId = e.target.getAttribute('href');
			document.querySelector(blockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
			menuActive();
		} else if (e.target.matches('main>a>img')) {
			e.preventDefault();
			const nextBlockId = e.target.closest('a').getAttribute('href');
			document.querySelector(nextBlockId).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		} else if (menu.classList.contains('active-menu') && !e.target.closest('.menu') && !e.target.matches('ul>li')) menuActive();
	});

};