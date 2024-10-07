export default class BuyLibraryCard {
	constructor() {
		this.libraryCard = document.querySelector('.library-card');
		this.closeBtn = document.querySelector('.library-card__btn-close');


		this.informatiosBtnBay = document.querySelector('#informatios_button-bay');

		this.libraryCard.addEventListener('click', (ev) => {
			if (ev.target == this.libraryCard) {
				this.changeLibraryCard();

			}
			// console.log(1)

		})
		this.closeBtn.addEventListener('click', () => {
			this.changeLibraryCard();

		})

		this.informatiosBtnBay.addEventListener('click', () => {
			const user = JSON.parse(localStorage.getItem('users'));
			const indexUser = JSON.parse(localStorage.getItem('activUserIndex'));
			if (this.checkInputs()) {
				console.log('input')
				if (this.validateCreditCard()) {
					console.log('card')
					if (this.validateExpiration()) {
						console.log('exp')
						if (this.validateCVC()) {
							user[indexUser].buyCard = true;
							localStorage.setItem('users', JSON.stringify(user));
							this.changeLibraryCard();
							location.reload();
						}
					}
				}
			}
			console.log(3)
		})
	}



	changeLibraryCard() {
		this.libraryCard.classList.remove('open');;
	}

	buyLibraryCard() {
		inputsBuy = document.querySelectorAll('.informatios input')
	}

	checkInputs() {
		const informatiosInputs = document.querySelectorAll('.informatios__input');
		return Array.from(informatiosInputs).every(input => input.value.trim() !== '');
	}

	validateCreditCard() {
		const creditCardInput = document.querySelector('#num-card-bank');
		const creditCardPattern = /\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}/;
		return creditCardPattern.test(creditCardInput.value) && creditCardInput.value.length === 16;
	}

	validateExpiration() {
		const expirationInputs = document.querySelectorAll('.expiration__code');
		const expirationPattern = /\d{2}/;
		return Array.from(expirationInputs).every(input => expirationPattern.test(input.value) && input.value.length === 2);
	}

	validateCVC() {
		const cvcInput = document.querySelector('.informatios__cvc');
		const cvcPattern = /\d{3}/;
		return cvcPattern.test(cvcInput.value) && cvcInput.value.length === 3;
	}

}