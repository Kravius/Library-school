import ActiveProfile from "./active-profile.js";
import LoginMenu from "./log-in.js";

export default
	class Register {
	constructor() {
		this.body = document.body;

		this.container = document.createElement('div');
		this.container.classList.add('conteiner-register');
		this.container.addEventListener('click', (ev) => {
			if (ev.target.classList.contains('conteiner-register')) {
				this.closeAndCleanRegisterMenu();
			}
		})

		this.registerBlock = document.createElement('div');
		this.registerBlock.classList.add('register');

		this.closeButton = document.createElement('button');
		this.closeButton.classList.add('register__button-close');
		this.closeButton.addEventListener('click', () => {
			this.closeAndCleanRegisterMenu()
		})

		this.title = document.createElement('p');
		this.title.classList.add('register-title');
		this.title.textContent = 'Register';

		this.inputsContainer = document.createElement('div');
		this.inputsContainer.classList.add('register__conteiner-inputs');

		this.createInputField('First name', 'register__input', 'register__input-first');
		this.createInputField('Last name', 'register__input', 'register__input-last');
		this.createInputField('E-mail', 'register__input', 'register__input-mail');
		this.createInputField('Password', 'register__input', 'register__input-password');

		this.signUpButton = document.createElement('button');
		this.signUpButton.classList.add('register__button-size', 'button', 'button_colored');
		this.signUpButton.textContent = 'Sign Up';
		this.signUpButton.addEventListener('click', () => {
			this.createObjecOfUsersToLocalStorage();
			// this.openPaymentsActiveWrapper();
			// this.changeProfileIcon();
		})

		this.loginBlock = document.createElement('div');
		this.loginBlock.classList.add('register__login');

		this.loginText = document.createElement('p');
		this.loginText.textContent = 'Already have an account?';

		this.loginButton = document.createElement('button');
		this.loginButton.classList.add('register__login-btn', 'button_colored');
		this.loginButton.textContent = 'Login';
		this.loginButton.addEventListener('click', (event) => {
			this.openLoginMenuInRegisterMenu(event)
			this.closeAndCleanRegisterMenu();
		})

		this.loginBlock.append(this.loginText, this.loginButton);
		this.registerBlock.append(this.closeButton, this.title, this.inputsContainer, this.signUpButton, this.loginBlock);
		this.container.append(this.registerBlock);
	}

	//cjздаем функцию которая позволит автоматически ее переиспользовать для создания инпутов
	// с проверками и навешиванием кнопок
	createInputField(labelText, ...inputClass) {
		const label = document.createElement('p');
		label.classList.add('register__text');
		label.textContent = labelText;

		const input = document.createElement('input');
		input.classList.add(...inputClass);
		input.addEventListener('blur', this.notEmptyInput);

		if (labelText === 'E-mail') {
			input.addEventListener('blur',this.checkMailToCorect)
		}

		if (labelText === 'Password') {
			input.addEventListener('blur', this.checkPasswordToCorect)
		}

		this.inputsContainer.append(label, input);
	}

	notEmptyInput() {
		let inputValue = this.value;
		if (inputValue.trim() === '') {
			this.classList.add('empty');
			this.setAttribute('placeholder', `fields can't be empty`)
		} else {
			this.classList.remove('empty');
			this.removeAttribute('placeholder');
			this.classList.add('correct-field');
		}
	}

	checkMailToCorect() {
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.value.trim())) {
			this.classList.add('empty');
			this.setAttribute('placeholder', `your E-mail is incorect`);
			this.value = '';
		} else {
			this.classList.remove('empty');
			this.removeAttribute('placeholder');
			this.classList.add('correct-field');
			// this.changeAtributsClassInInput()
		};
	}

	checkPasswordToCorect() {
		if (this.value.length <= 8) {
			this.classList.add('empty');
			this.setAttribute('placeholder', `your password to small`);
			this.value = '';
		} else {
			this.classList.remove('empty');
			this.removeAttribute('placeholder');
			this.classList.add('correct-field');
			// this.changeAtributsClassInInput()
		};
	}

	//we use this funck  in inputs check
	// changeAtributsClassInInput() {
	// 	this.classList.remove('empty');
	// 	this.removeAttribute('placeholder');
	// 	this.classList.add('correct-field');
	// }

	//обьеденяем всю регестрацию , для кнопки 'Sign UP' const = signUpButton;

	//проверяем массив инпутов регистра и заносим в локалсторыдж данные
	createObjecOfUsersToLocalStorage() {
		let user = {};
		let usersArray = JSON.parse(localStorage.getItem('users') || '[]');
		console.log(usersArray)
		let inputs = [...document.querySelectorAll('.register__conteiner-inputs input')];
		const fieldNames = ['firstName', 'lastName', 'mail', 'password'];

		if (inputs.every(input => input.classList.contains('correct-field'))) {
			fieldNames.forEach((fieldName, index) => {
				user[fieldName] = inputs[index].value;
			})
		}

		if (Object.keys(user).length > 0) {

			//we use function to create number and put to  the object "user" with new value "cardNumber"
			//and other things that we keep in storage
			let cardNum = this.generateRandomCardNumber();
			user.cardNumber = cardNum;
			user.visits = 1;
			user.bonuses = 0;
			user.books = 0;

			usersArray.push(user);
			localStorage.setItem('users', JSON.stringify(usersArray));
			//добавили индекс для поиска и перезаписи юзера  в локал используя последний добавленный елемент в массив
			this.makeLocalStorageIndexForUserObject(usersArray.length-1);


			let activeProfile = new ActiveProfile();
			document.querySelector('.header__wrapper').append(activeProfile.container);

			//вызываем внутри регистрации при ее окончании для смены иконки
			activeProfile.changeProfileIcon(user.firstName, user.lastName);
			activeProfile.openPaymentsActiveWrapper();
			this.closeAndCleanRegisterMenu();
		}
	}

	//create 9 number of 16 system numbers
	generateRandomCardNumber() {
		let cardNumber = '';
		for (let i = 0; i <= 9; i++) {
			let createRandomNumber = Math.floor(Math.random() * 16);
			cardNumber += createRandomNumber.toString(16);
		}
		return cardNumber.toUpperCase();
	}

	makeLocalStorageIndexForUserObject(arrayLength){
		JSON.stringify(localStorage.setItem('activUserIndex', arrayLength));
	}

	openLoginMenuInRegisterMenu(event) {
		//true or false
		const isHeaderMenu = event.target.id === 'header__reagister-login-menu';

		//write what selector we click now;
		const menuSelector = isHeaderMenu ? '.header__wrapper' : '#none-active-profile';
		//create id for change click register-login in header=payments
		const idMenuSelectorBTN = isHeaderMenu ? 'header__login-reagister-menu' : 'payments__login-reagister-menu'
		if (!document.querySelector(`${menuSelector} .conteiner-login`)) {
			let createLoginMenu = new LoginMenu();
			createLoginMenu.registerButton.id = idMenuSelectorBTN;
			document.querySelector(menuSelector).append(createLoginMenu.container);
			document.querySelector(`${menuSelector} .conteiner-login`).classList.add('open');
		}

		document.querySelector(`${menuSelector} .conteiner-login`).classList.add('open');
		this.container.classList.toggle('open');
		// this.closeAndCleanRegisterMenu();
		this.body.classList.add('lock');

	}

	closeAndCleanRegisterMenu() {
		let inputs = [...document.querySelectorAll('.register__conteiner-inputs input')]
		this.container.classList.remove('open');
		this.body.classList.remove('lock');
		inputs.forEach(input => input.value = '');
	}
}
