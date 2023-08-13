const burger =  document.querySelector('.hamburger');
const navigation = document.querySelector('.header__navigation');
burger.addEventListener('click', function() {
	this.classList.toggle('active');
	navigation.classList.toggle('open');
	document.querySelector('body').classList.toggle('lock');
})