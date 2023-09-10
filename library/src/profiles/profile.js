import Register from './register.js';
import ActiveProfile from './active-profile.js';
import LoginMenu from './log-in.js';

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
	logInButton.id= 'profile__log-in';
	logInButton.textContent = 'Log In';

	//putt listener to make new login window
	logInButton.addEventListener('click',()=>{
		if (!document.querySelector('.header__wrapper .conteiner-login')) {
		let menuLogIn = new LoginMenu('');
		menuLogIn.registerButton.id = 'header__login-reagister-menu';
		document.querySelector('.header__wrapper').append(menuLogIn.container);
		}
//we use this all time, we dont want cope two times the same code
		document.querySelector('.header__wrapper .conteiner-login').classList.toggle('open');
		conteinerProfile.classList.remove('open');
	})

	let registerButton = document.createElement('button');
	registerButton.textContent = 'Register';
	registerButton.id = 'profile-register'
	registerButton.classList.add('menu_third-line');

	//putt listener to make new register window
	registerButton.addEventListener('click', () => {
			if (!document.querySelector('.header__wrapper .conteiner-register')) {
				//we use class register from difirent js to create conteiner and add to wrapper payments
				let createRegisterMenu = new Register();
				createRegisterMenu.loginButton.id = 'header__reagister-login-menu';
				document.querySelector('.header__wrapper').append(createRegisterMenu.container);
			}

			document.querySelector('.header__wrapper .conteiner-register').classList.toggle('open');
			conteinerProfile.classList.remove('open');
			// conteinerRegister.classList.toggle('open');
		})

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
	const paymentsLoginrBTN = document.querySelector('#payments-login');
	const conteinerRegister = document.querySelector('.conteiner-register');
	const paymentsWrapper = document.querySelector('#none-active-profile');

	// profileRegisterBTN.addEventListener('click', (ev) => {
	// 	if (!document.querySelector('.header__wrapper .conteiner-register')) {
	// 		//we use class register from difirent js to create conteiner and add to wrapper payments
	// 		let createRegisterMenu = new Register();
	// 		document.querySelector('.header__wrapper').append(createRegisterMenu.container);
	// 	}

	// 	document.querySelector('.header__wrapper .conteiner-register').classList.toggle('open');
	// 	conteinerProfile.classList.remove('open');
	// 	// conteinerRegister.classList.toggle('open');
	// })


	paymentsRegisterBTN.addEventListener('click', () => {
		if (!document.querySelector('#none-active-profile .conteiner-register')) {
			//we use class register from difirent js to create conteiner and add to wrapper payments
			let createRegisterMenu = new Register();
			createRegisterMenu.loginButton.id = 'payments__register-login-menu';
			paymentsWrapper.append(createRegisterMenu.container);
		}

		document.querySelector('#none-active-profile .conteiner-register').classList.toggle('open');
	})

	paymentsLoginrBTN.addEventListener('click', () => {
		if (!document.querySelector('#none-active-profile .conteiner-login')) {
			//we use class login from difirent js to create conteiner and add to wrapper payments
			let menuLogIn = new LoginMenu('');
			paymentsWrapper.append(menuLogIn.container);
			//add id, we need some how to finde what the btn we click in header or payments;
			menuLogIn.registerButton.id = 'payments__login-reagister-menu';
		}

		document.querySelector('#none-active-profile .conteiner-login').classList.toggle('open');
	})
})()