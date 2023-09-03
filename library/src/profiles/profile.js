import Register from './register.js';
import ActiveProfile from './active-profile.js';

export default (function () {
	let profileConteiner = document.createElement('div');
	profileConteiner.id = 'menu-profile-none-active'
	profileConteiner.classList.add('conteiner-profile');

	let profile = document.createElement('div');
	profile.classList.add('profile');

	let profilText = document.createElement('p');
	profilText.classList.add('profile__logo');
	profilText.textContent = 'Profile';

	let logInButton = document.createElement('button');
	logInButton.classList.add('menu_second-line');
	logInButton.id= 'profile__log-in'
	logInButton.textContent = 'Log In';

	let registerButton = document.createElement('button');
	registerButton.textContent = 'Register';
	registerButton.id = 'profile-register'
	registerButton.classList.add('menu_third-line');

	profile.append(profilText, logInButton, registerButton);
	// document.querySelector('.menu').append(profile);

	let wrapperHeader = document.querySelector('.header__wrapper');

	//add conteiner noneActiveProfileUser;
	profileConteiner.append(profile);
	wrapperHeader.append(profileConteiner);

	//immediatly add conteiner activeProfileUser;
	// let activeProfile = new ActiveProfile();
	// wrapperHeader.append(activeProfile.container);


	//для закрытия мню навигации
	const navigation = document.querySelector('.header__navigation');
	const body = document.querySelector('body');
	const burger = document.querySelector('.hamburger');

	const conteinerProfile = document.querySelector('#menu-profile-none-active');
	const menuBTN = document.querySelector('.menu');
	// const profileMenu = document.querySelector('.profile');
	// const profileRegister = document.querySelector('.menu_third-line');
	const profileLogIn = document.querySelector('#profile__log-in');

	// menuBTN.addEventListener('click', (ev) => {
	// 	const activeConteinerProfile = document.querySelector('#profile-active')
	// 	if (ev.target === menuBTN) {
	// 		//we have check active Profile or not
	// 		if (document.querySelector('.active-profile-btn')) {
	// 			activeConteinerProfile.classList.toggle('open');

	// 		} else {
	// 			conteinerProfile.classList.toggle('open');
	// 			//закриваем навигацию меню
	// 		}
	// 		burger.classList.remove('open');
	// 		navigation.classList.remove('open');
	// 		body.classList.toggle('lock');
	// 	}
	// });

	menuBTN.addEventListener('click', (ev) => {
		const activeConteinerProfile = document.querySelector('#menu-profile-active')
		if (ev.target === menuBTN) {
			//we have check active Profile or not
			if (document.querySelector('.active-profile-btn')) {
				activeConteinerProfile.classList.toggle('open');
				addClassToVisiblSkrin()

			} else {
				conteinerProfile.classList.toggle('open');
				//закриваем навигацию меню
				addClassToVisiblSkrin()
			}
		}
	});

	function addClassToVisiblSkrin() {
		body.classList.toggle('lock');
		navigation.classList.remove('open');

		//check if burger open now we close it
		if(burger.classList.contains('open')){
			burger.classList.remove('open');
			body.classList.toggle('lock');
		}
	}

	// profileMenu.addEventListener('click', (ev) => {
	// })

	conteinerProfile.addEventListener('click', (ev) => {
		if (ev.target === conteinerProfile) {
			conteinerProfile.classList.remove('open');
			body.classList.remove('lock');
		}
	})

	const profileRegisterBTN = document.querySelector('#profile-register');
	const paymentsRegisterBTN = document.querySelector('#payments-register');
	const conteinerRegister = document.querySelector('.conteiner-register');
	const paymentsWrapper = document.querySelector('#none-active-profile');

	profileRegisterBTN.addEventListener('click', (ev) => {
		if (!document.querySelector('.header__wrapper .conteiner-register')) {
			//we use class register from difirent js to create conteiner and add to wrapper payments
			let register = new Register();
			document.querySelector('.header__wrapper').append(register.container);
		}

		document.querySelector('.header__wrapper .conteiner-register').classList.toggle('open');
		conteinerProfile.classList.remove('open');
		// conteinerRegister.classList.toggle('open');
	})


	paymentsRegisterBTN.addEventListener('click', () => {
		if (!document.querySelector('#none-active-profile .conteiner-register')) {
			//we use class register from difirent js to create conteiner and add to wrapper payments
			let register = new Register();
			paymentsWrapper.append(register.container);
		}

		document.querySelector('#none-active-profile .conteiner-register').classList.toggle('open');
	})

})()