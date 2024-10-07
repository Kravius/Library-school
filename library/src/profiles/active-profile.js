import MyProfile from "./my-profile.js";

export default class ActiveProfile {
	constructor(activeUser) {
		this.activeUser = activeUser;

		this.profileIcon = document.querySelector('.menu__img');
		this.menuBTN = document.querySelector('.menu');
		// this.toolTipDiv = document.querySelector('.tooltip');

		this.usersFromStorage = JSON.parse(localStorage.getItem('users') || '[]');
		this.indexActiveUserFromStorage = JSON.parse(localStorage.getItem('activUserIndex'));

		//crete profile menu active;
		this.container = document.createElement('div');
		this.container.id = 'menu-profile-active'
		this.container.classList.add('conteiner-profile');
		this.container.addEventListener('click', (ev) => {
			if (ev.target === this.container) {
				this.container.classList.remove('open');
				document.body.classList.remove('lock');
			}
		});

		this.profile = document.createElement('div');
		this.profile.classList.add('profile');
		//  this.profile.textContent = takeSomeConstatFromActiveUser(cardNumber);

		this.profilText = document.createElement('p');
		this.profilText.classList.add('profile__logo', 'active-logo');
		this.profilText.id = 'active-profile';
		this.profilText.textContent = this.activeUser.cardNumber || '';

		this.myProfileButton = document.createElement('button');
		this.myProfileButton.classList.add('menu_second-line');
		this.myProfileButton.id = 'menu-my-profile';
		this.myProfileButton.textContent = 'My-profile';
		this.myProfileButton.addEventListener('click', () => {
			document.querySelector('.my-profile').classList.add('open');
			this.container.classList.remove('open');
			let myProfile = new MyProfile();
			myProfile.changeInitialsAndName(activeUser.firstName,activeUser.lastName);
			myProfile.changeCountProfile(activeUser.visits,activeUser.books);
			myProfile.changeCardNumber(activeUser.cardNumber);
		})

		this.logOutButton = document.createElement('button');
		this.logOutButton.textContent = 'Log-out';
		this.logOutButton.classList.add('menu_third-line');
		this.logOutButton.addEventListener('click', () => {
			this.logOutProfile();
		})

		this.profile.append(this.profilText, this.myProfileButton, this.logOutButton);
		this.container.append(this.profile);

		this.profilePayments = document.querySelector('#payments-profile-btn');
		this.profilePayments.addEventListener('click', () => {
			document.querySelector('.my-profile').classList.toggle('open');
			this.container.classList.remove('open');
			let myProfile = new MyProfile();
			myProfile.changeInitialsAndName(activeUser.firstName,activeUser.lastName);
			myProfile.changeCountProfile(activeUser.visits,activeUser.books);
			myProfile.changeCardNumber(activeUser.cardNumber);
			document.querySelector('.my-profile').scrollIntoView({behavior: 'smooth'})
			document.body.classList.add('lock');
		})
	}

	// //we write and take element what we need from localStorage user who active now;
	// takeSomeConstatFromActiveUser(constant){
	// return this.activeUser.forEach(element => {
	// 	element.constant;
	// 	});
	// }



	// addCountVisits() {
	// 	this.activeUser.visits= parseInt(this.activeUser.visits) + 1;
	// }

	changeProfileIcon(firstName, lastName) {
		const profileIcon = document.querySelector('.menu__img');
		const menuBTN = document.querySelector('.menu');
		// const toolTipDiv = document.querySelector('.tooltip');

		//не могу понять почему не могу добавить в кнопку спан или див, что там разместить подсказку
		// пришлось вручную прописать в html див
		// menuBTN.classList.add('tooltip');
		// let spanTooltip = document.createElement('div');
		// spanTooltip.classList.add('tooltip');
			// toolTipDiv.textContent = `${firstName} ${lastName}`;
			// menuBTN.appendChild(spanTooltip);

			// menuBTN.addEventListener('mouseover', () => {
			// 	const rect = menuBTN.getBoundingClientRect();
			// 	// const left = rect.left + window.scrollX + menuBTN.offsetWidth + 30; // Отступ справа от кнопки
			// 	const top = rect.top + window.scrollY - 20; // Отступ сверху от кнопки
			// 	// toolTipDiv.style.left = left + 'px';
			// 	toolTipDiv.style.top = top + 'px';
			// 	toolTipDiv.classList.add('open');
			// })
			// menuBTN.addEventListener('mouseout', () => {
			// 	toolTipDiv.classList.remove('open');
			// });

			//убираем полностью нашу картинку иконки и записываем текст с добавлением стиля
			menuBTN.classList.add('active-profile-btn');
			menuBTN.textContent = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

			//change object img display none
			profileIcon.classList.add('none');
	}

	// changeCardNumberProfile(){
	// 	document.querySelector('#active-profile').textContent = this.activeUser.cardNumber;
	// }

	openPaymentsActiveWrapper() {
		let name = document.querySelector('#form-name-active');
		let card = document.querySelector('#form-card-active');
		name.value =`${this.activeUser.firstName} ${this.activeUser.lastName}`
		card.value = this.activeUser.cardNumber;
		name.style.color = '#BB945F';
		card.style.color = '#BB945F';

		document.querySelector('#none-active-profile').classList.add('none')
		document.querySelector('#active-profile-card').classList.remove('none')
		document.querySelector('.menu').classList.add('active-profile-btn')
	}

	closePaymentsActiveWrapper() {
		document.querySelector('#none-active-profile').classList.remove('none')
		document.querySelector('#active-profile-card').classList.add('none')
		document.querySelector('.menu').classList.remove('active-profile-btn')
	}

	//заменяем юзера поссле каких либо действий на сайте
	seveUserToLocalStorage() {
		this.usersFromStorage[this.indexActiveUserFromStorage] = this.activeUser;
		console.log(this.usersFromStorage)
		localStorage.setItem('users', JSON.stringify(this.usersFromStorage));
		localStorage.removeItem('activUserIndex');
	}

	removeClassListToActiveProfile() {
		this.menuBTN.textContent = '';
		this.menuBTN.classList.remove('active-profile-btn')
		this.menuBTN.appendChild(this.profileIcon);
		this.profileIcon.classList.remove('none');
		// this.toolTipDiv.textContent = '';
	}

	logOutProfile() {
		this.removeClassListToActiveProfile();
		this.seveUserToLocalStorage();
		this.closePaymentsActiveWrapper();
		this.container.classList.remove('open')
		document.body.classList.remove('lock');
	}

}