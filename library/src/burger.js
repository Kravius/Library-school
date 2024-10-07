export default (function () {

	const burger = document.querySelector('.hamburger');
	const navigation = document.querySelector('.header__navigation');
	const body = document.querySelector('body');

	burger.addEventListener('click', function () {
		const conteinerProfile = document.querySelector('#menu-profile-none-active');
		const conteinerProfileActive = document.querySelector('#menu-profile-active');
		this.classList.toggle('open');
		navigation.classList.toggle('open');
		body.classList.toggle('lock');

		if (conteinerProfile.classList.contains('open')) {
			conteinerProfile.classList.remove('open');
			body.classList.toggle('lock');
		}

		if(conteinerProfileActive){
			if (conteinerProfileActive.classList.contains('open')) {
				conteinerProfileActive.classList.remove('open');
				body.classList.toggle('lock');
			}
		}
	})

	const navLink = document.querySelectorAll('.navigation__link');

	navLink.forEach(link => {
		link.addEventListener('click', function () {
			burger.classList.remove('open');
			navigation.classList.remove('open');
			body.classList.remove('lock');

		})
	})

	navigation.addEventListener('click', () => {
		burger.classList.remove('open');
		navigation.classList.remove('open');
		body.classList.remove('lock');
	})
})();