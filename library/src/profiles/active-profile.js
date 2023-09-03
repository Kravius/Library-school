export default class ActiveProfile {
		constructor(activeUser) {
			this.activeUser = activeUser;

			this.usersFromStorage = JSON.parse(localStorage.getItem('users') || '[]');

			//crete profile menu active;
			 this.container = document.createElement('div');
			 this.container.id = 'menu-profile-active'
			 this.container.classList.add('conteiner-profile');

			 this.profile = document.createElement('div');
			 this.profile.classList.add('profile');
			//  this.profile.textContent = takeSomeConstatFromActiveUser(cardNumber);

			 this.profilText = document.createElement('p');
			 this.profilText.classList.add('profile__logo');
			 this.profilText.id = 'active-profile'
			 this.profilText.textContent = 'Profile';

			 this.logInButton = document.createElement('button');
			 this.logInButton.classList.add('menu_second-line');
			 this.logInButton.id = 'menu-my-profile';
			 this.logInButton.textContent = 'My-profile';

			 this.registerButton = document.createElement('button');
			 this.registerButton.textContent = 'Log-out';
			 this.registerButton.classList.add('menu_third-line');

			 this.profile.append(this.profilText, this.logInButton, this.registerButton);
			 this.container.append(this.profile);
		}

		// addEventListeners() {
		// 	 const menuBTN = document.querySelector('.menu');
		// 	 const navigation = document.querySelector('.header__navigation');
		// 	 const body = document.querySelector('body');
		// 	 const burger = document.querySelector('.hamburger');
		// 	 const conteinerProfile = this.container;

		// 	 menuBTN.addEventListener('click', (ev) => {
		// 		  if (ev.target === menuBTN) {
		// 				conteinerProfile.classList.toggle('open');

		// 				// закрываем навигацию меню
		// 				burger.classList.remove('active');
		// 				navigation.classList.remove('open');
		// 				body.classList.toggle('lock');
		// 		  }
		// 	 });

		// 	 conteinerProfile.addEventListener('click', (ev) => {
		// 		  if (ev.target === conteinerProfile) {
		// 				conteinerProfile.classList.remove('open');
		// 				body.classList.remove('lock');
		// 		  }
		// 	 });
		// }

		// appendTo(parentElement) {
		// 	 parentElement.append(this.container);
		// }

		// //we write and take element what we need from localStorage user who active now;
		// takeSomeConstatFromActiveUser(constant){
		// return this.activeUser.forEach(element => {
		// 	element.constant;
		// 	});
		// }

		// logOutProfile() {

		// 	// this.usersFromStorage.push(user);
		// 	// localStorage.setItem('users', JSON.stringify(this.usersFromStorage));
			// localStorage.removeItem('user');
		// }

		// addCountVisits() {
		// 	this.activeUser.visits++;
		// }

		// closePaymentsActiveWrapper() {
		// 	document.querySelector('#none-active-profile').classList.remove('none');
		// 	document.querySelector('#active-profile-card').classList.add('none');
		// }
		changeProfileIcon(firstName, lastName) {
			const profileIcon = document.querySelector('.menu__img');
			const menuBTN = document.querySelector('.menu');

			const firstletterName = firstName.charAt(0).toUpperCase();
			const lastletterName = lastName.charAt(0).toUpperCase();

			//убираем полностью нашу картинку иконки и записываем текст с добавлением стиля
			menuBTN.classList.add('active-profile-btn');
			menuBTN.textContent = firstletterName + lastletterName;

			//change object img display none
			profileIcon.classList.add('none');
		}
	openPaymentsActiveWrapper() {
			document.querySelector('#none-active-profile').classList.add('none')
			document.querySelector('#active-profile-card').classList.remove('none')
			document.querySelector('.menu').classList.add('active-profile-btn')
		}
  }

//   const profile = new Profile();
//   profile.appendTo(document.querySelector('.header__wrapper'));
