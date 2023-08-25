export default (function () {
	let offset = 0
	const BTN_LEFT = document.querySelector('#btn-left');
	const BTN_RIGHT = document.querySelector('#btn-right');
	const sliderLine = document.querySelector('.about__carousel');

	const aboutCarouselButtons = document.querySelector('.about__carousel-buttons');

	aboutCarouselButtons.addEventListener('click', (ev) => {
		if (ev.target === aboutCarouselButtons.children[1]) {
			offset += 475;

			sliderLine.style.left = -offset + 'px';
			aboutCarouselButtons.children[1].classList.remove('about__button');
			aboutCarouselButtons.children[1].classList.add('about__button_active');
		}

	})


	BTN_LEFT.disabled = true;
	BTN_LEFT.addEventListener('click', moveLeft);

	function moveLeft() {
		if (offset === 0) {
			BTN_LEFT.disabled = true;
			return;
		}
		offset -= 475;
		BTN_RIGHT.disabled = false;
		sliderLine.style.left = -offset + 'px';
	}

	BTN_RIGHT.addEventListener('click', moveRight);

	function moveRight() {
		console.log('right')
		if (offset > 1450) {
			BTN_RIGHT.disabled = true;
			return;
		}
		offset += 475;
		sliderLine.style.left = -offset + 'px';
		BTN_LEFT.disabled = false;

	}


})();
