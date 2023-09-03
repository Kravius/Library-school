export default (function(){

const burger =  document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
const body = document.querySelector('body');
const conteinerProfile = document.querySelector('#menu-profile-none-active');

burger.addEventListener('click', function() {
	this.classList.toggle('open');
	navigation.classList.toggle('open');
	body.classList.toggle('lock');

	if(conteinerProfile.classList.contains('open')){
		conteinerProfile.classList.remove('open');
		body.classList.toggle('lock');
	}
})

const navLink = document.querySelectorAll('.navigation__link');

navLink.forEach(link => {
	link.addEventListener('click', function() {
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