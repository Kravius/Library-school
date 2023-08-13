const burger =  document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const body = document.querySelector('body');

burger.addEventListener('click', function() {
	this.classList.toggle('active');
	navigation.classList.toggle('open');
	body.classList.toggle('lock');
})

const navLink = document.querySelectorAll('.navigation__link');

navLink.forEach(link => {
	link.addEventListener('click', function() {
		burger.classList.remove('active');
		navigation.classList.remove('open');
		body.classList.remove('lock');
	})
})

navigation.addEventListener('click', () => {
	burger.classList.remove('active');
	navigation.classList.remove('open');
	body.classList.remove('lock');
})