import {
	animate
} from "./helper";

export const modal = () => {

	const modal = document.querySelector('.popup');
	const modalContent = modal.querySelector('.popup-content');
	const buttons = document.querySelectorAll('.popup-btn');

	const modalUp = () => {
		let startPosition = modalContent.style.top = 100;

		animate({
			duration: 100,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				if (progress > 0) {
					modal.style.display = "block";
					modal.style.opacity = 0;
					modal.style.opacity = progress;
					modalContent.style.top = (startPosition - (startPosition - 10) * progress) + "%";
				} else {
					modal.style.display = "none"
				}
			}
		});
	};

	const modalDown = () => {
		let startPosition = modalContent.style.top = 10;

		animate({
			duration: 100,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				progress == 1 ? modal.style.display = "none" :
					modal.style.opacity = 1 - progress;
				modalContent.style.top = (startPosition + progress * 90) + "%";
			}
		});
	};

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {

			if (innerWidth > 768) modalUp();
			else {
				modal.style.display = "block";
				modal.style.opacity = 1;
				modalContent.style.top = 10 + "%";
			}
		});
	});

	modal.addEventListener('click', (e) => {
		if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {

			if (innerWidth > 768) modalDown();
			else {
				modal.style.display = "none";
				modal.style.opacity = 1;
				modalContent.style.top = 10 + "%";
			}
		}
	});
};

if (widthScreen < 768) {
	modal.style.display = 'block';
} else {
	modal.style.display = 'block';
	animate({
		duration: 1000,
		timing(timeFraction) {
			return timeFraction;
		},
		draw(progress) {
			modalContent.style.left = (40 * progress) + '%'
		}
	});
}
})
})