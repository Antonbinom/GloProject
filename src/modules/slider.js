export const slider = (classSlider, classSlides, activeSlideClass = 'portfolio-item-active', activeDotClass = 'dot-active') => {

	if (!document.querySelector(classSlider) || !document.querySelectorAll(classSlides)) {
		return
	} else {
		const sliderBlock = document.querySelector(classSlider);
		const slides = document.querySelectorAll(classSlides);
		let currentSlide = 0;
		let timeInterval = 2000;
		let interval;
		let dots;

		const getDot = () => {
			let portfolioDots = document.createElement('ul');
			portfolioDots.classList.add('portfolio-dots');
			portfolioDots.innerHTML = '';
			for (let i = 0; i < slides.length; i++) {
				portfolioDots.innerHTML += '<li class="dot"></li>';
			}
			sliderBlock.append(portfolioDots);
			dots = document.querySelectorAll('.dot');
			dots[0].classList.add(activeDotClass)
		}

		const prevSlide = (elements, index, strClass) => {
			elements[index].classList.remove(strClass);
		};

		const nextSlide = (elements, index, strClass) => {
			;
			elements[index].classList.add(strClass);
		}

		const autoSlide = () => {
			prevSlide(slides, currentSlide, activeSlideClass);
			prevSlide(dots, currentSlide, activeDotClass);
			currentSlide++
			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}
			nextSlide(slides, currentSlide, activeSlideClass);
			nextSlide(dots, currentSlide, activeDotClass);
		};

		const startSlide = (timer = 1500) => {
			interval = setInterval(autoSlide, timer);
		};

		const stopSlide = () => {
			clearInterval(interval);
		}

		sliderBlock.addEventListener('click', (e) => {
			e.preventDefault();

			if (!e.target.matches('.dot, .portfolio-btn')) {
				return;
			}

			prevSlide(slides, currentSlide, activeSlideClass);
			prevSlide(dots, currentSlide, activeDotClass);

			if (e.target.matches('#arrow-right')) {
				currentSlide++
			} else if (e.target.matches('#arrow-left')) {
				currentSlide--
			} else if (e.target.classList.contains('dot')) {
				dots.forEach((dot, index) => {
					if (e.target === dot) {
						currentSlide = index;
					}
				})
			}

			if (currentSlide >= slides.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slides.length - 1;
			}

			nextSlide(slides, currentSlide, activeSlideClass);
			nextSlide(dots, currentSlide, activeDotClass);
		})

		sliderBlock.addEventListener('mouseenter', (e) => {
			if (e.target.matches('.dot, .portfolio-btn')) {
				stopSlide();
			}
		}, true);

		sliderBlock.addEventListener('mouseleave', (e) => {
			if (e.target.matches('.dot, .portfolio-btn')) {
				startSlide(timeInterval);
			}
		}, true)

		getDot();
		startSlide(timeInterval);
	}
}