import Register from './register.js'

export default class LoginMenu {
	constructor() {
		this.body = document.body;

		this.container = document.createElement('div');
		this.container.classList.add('conteiner-login');
		this.container.addEventListener('click', (ev) => {
			if (ev.target.classList.contains('conteiner-login'))
				this.closeAndCleanLoginMenu();
		})

		this.loginBlock = document.createElement('div');
		this.loginBlock.classList.add('login');

		this.closeButton = document.createElement('button');
		this.closeButton.classList.add('login__button-close');
		this.closeButton.addEventListener('click', () => {
			this.closeAndCleanLoginMenu();
		})

		this.title = document.createElement('p');
		this.title.classList.add('login-title');
		this.title.textContent = 'LOGIN';

		this.inputsContainer = document.createElement('div');
		this.inputsContainer.classList.add('login__conteiner-inputs');

		this.createInputField('E-mail or readers card', 'login__input', 'login__input-mail');
		this.createInputField('Password', 'login__input', 'login__input-password');

		this.logInButton = document.createElement('button');
		this.logInButton.classList.add('login__button-size', 'button', 'button_colored');
		this.logInButton.textContent = 'Log In';
		// this.logInButton.addEventListener('click', () => {
		// 	this.createObjecOfUsersToLocalStorage();
		// 	// this.openPaymentsActiveWrapper();
		// 	// this.changeProfileIcon();
		// })

		this.registerBlock = document.createElement('div');
		this.registerBlock.classList.add('login__login');

		this.loginText = document.createElement('p');
		this.loginText.textContent = 'Don’t have an account??';

		this.registerButton = document.createElement('button');
		this.registerButton.classList.add('register__login-btn', 'button_colored');
		this.registerButton.textContent = 'Register';
		this.registerButton.addEventListener('click', (event) => {
			this.openRegisterMenuInLoginMenu(event)
		})

		this.registerBlock.append(this.loginText, this.registerButton);
		this.loginBlock.append(this.closeButton, this.title, this.inputsContainer, this.logInButton, this.registerBlock);
		this.container.append(this.loginBlock);
	}

	//cjздаем функцию которая позволит автоматически ее переиспользовать для создания инпутов
	// с проверками и навешиванием кнопок
	createInputField(labelText, ...inputClass) {
		const label = document.createElement('p');
		label.classList.add('login__text');
		label.textContent = labelText;

		const input = document.createElement('input');
		input.classList.add(inputClass);
		input.addEventListener('blur', this.notEmptyInput);
		if (labelText === 'E-mail or readers card') {
			input.addEventListener('blur', this.checkMailToCorect)
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
			this.changeAtributsClassInInput();
		}
	}

	checkMailToCorect() {
		if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.value.trim())) {
			this.classList.add('empty');
			this.setAttribute('placeholder', `your E-mail is incorect`);
			this.value = '';
		} else {
			this.changeAtributsClassInInput();
		};
	}

	checkPasswordToCorect() {
		if (this.value.length <= 8) {
			this.classList.add('empty');
			this.setAttribute('placeholder', `your password to small`);
			this.value = '';
		} else {
			this.changeAtributsClassInInput();
		};
	}

	//we use this funck  in inputs check
	changeAtributsClassInInput() {
		this.classList.remove('empty');
		this.removeAttribute('placeholder');
		this.classList.add('correct-field');
	}

	// open register menu when we click to register btn in login menu
	openRegisterMenuInLoginMenu(event) {
		//true or false
		const isHeaderMenu = event.target.id === 'header__login-reagister-menu';
		//write what selector we click now;
		const menuSelector = isHeaderMenu ? '.header__wrapper' : '#none-active-profile';
		const idMenuSelectorBTN = isHeaderMenu ? 'header__reagister-login-menu' : 'payments__register-login-menu';

		if (!document.querySelector(`${menuSelector} .conteiner-register`)) {
			let createRegisterMenu = new Register();
			createRegisterMenu.loginButton.id = idMenuSelectorBTN;
			document.querySelector(menuSelector).append(createRegisterMenu.container);
			document.querySelector(`${menuSelector} .conteiner-register`).classList.add('open');
		}

		document.querySelector(`${menuSelector} .conteiner-register`).classList.add('open');
		this.container.classList.toggle('open')
	}

	closeAndCleanLoginMenu() {
		let inputs = [...document.querySelectorAll('.login__conteiner-inputs input')]
		this.container.classList.remove('open');
		this.body.classList.remove('lock');
		inputs.forEach(input => input.value = '');
	}
}