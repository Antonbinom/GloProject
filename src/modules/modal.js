const modal = () => {

	const modal = document.querySelector('.popup');
	const modalContent = modal.querySelector('.popup-content');
	const buttons = document.querySelectorAll('.popup-btn');

	let idInterval;
	let count = 0;

	const modalUp = () => {
		idInterval = requestAnimationFrame(modalUp);
		modalContent.style.transition = "all 0.3s";
		if (modalContent.style.top > "10%") {
			count++;
			modalContent.style.top = (120 - count * 10) + '%';
		} else {
			cancelAnimationFrame(idInterval);
		}
	};

	const modalDown = () => {
		idInterval = requestAnimationFrame(modalUp);
		modalContent.style.transition = "all 0.3s";
		if (modalContent.style.top < "120%") {
			count++;
			modalContent.style.top = (10 + count * 10) + '%';
		} else {
			cancelAnimationFrame(idInterval);
		}
	};

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.style.display = "block";
			if (innerWidth <= 768) {
				modalContent.style.top = "10%";
			} else {
				idInterval = requestAnimationFrame(modalUp);
				modalContent.style.top = "120%";
			}
		});
	});

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
			if (innerWidth > 768) {
				modalContent.style.top = "120%";
				count = 0;
				setTimeout(() => {
					modal.style.display = "none";
				}, 100);
			} else {
				idInterval = requestAnimationFrame(modalDown);
				modalContent.style.top = "10%";
				modal.style.display = "none";
			}
		}
	});
};

export default modal;