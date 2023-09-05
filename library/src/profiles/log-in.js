export default class LoginMenu {
	constructor() {
		this.body = document.body;

		this.container = document.createElement('div');
		this.container.classList.add('conteiner-login');
		this.container.addEventListener('click', (ev) => {
			if(ev.target.classList.contains('conteiner-login'))
			this.closeAndCleanRegisterMenu();
		})

		this.loginBlock = document.createElement('div');
		this.loginBlock.classList.add('login');

		this.closeButton = document.createElement('button');
		this.closeButton.classList.add('login__button-close');
		this.closeButton.addEventListener('click', () => {
			this.closeAndCleanRegisterMenu()
		})

		this.title = document.createElement('p');
		this.title.classList.add('login-title');
		this.title.textContent = 'LOGIN';

		this.inputsContainer = document.createElement('div');
		this.inputsContainer.classList.add('login__conteiner-inputs');

		this.createInputField('E-mail or readers card', 'login__input', 'login__input-mail');
		this.createInputField('Password', 'login__input', 'login__input-password');

		this.signUpButton = document.createElement('button');
		this.signUpButton.classList.add('login__button-size', 'button', 'button_colored');
		this.signUpButton.textContent = 'Log In';
		this.signUpButton.addEventListener('click', () => {
			this.createObjecOfUsersToLocalStorage();
			// this.openPaymentsActiveWrapper();
			// this.changeProfileIcon();
		})

		this.registerBlock = document.createElement('div');
		this.registerBlock.classList.add('login__login');

		this.loginText = document.createElement('p');
		this.loginText.textContent = 'Don’t have an account??';

		this.loginButton = document.createElement('button');
		this.loginButton.classList.add('register__login-btn', 'button_colored');
		this.loginButton.textContent = 'Register';

		this.registerBlock.append(this.loginText, this.loginButton);
		this.loginBlock.append(this.closeButton, this.title, this.inputsContainer, this.signUpButton, this.registerBlock);
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
			this.classList.remove('empty')
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
		};
	}

	closeAndCleanRegisterMenu() {
		let inputs = [...document.querySelectorAll('.login__conteiner-inputs input')]
		this.container.classList.remove('open');
		this.body.classList.remove('lock');
		inputs.forEach(input => input.value = '');
	}
}