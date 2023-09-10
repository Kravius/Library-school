export default class BuyLibraryCard {
	constructor() {
		this.libraryCard = document.querySelector('.library-card');
		this.closeBtn = document.querySelector('.library-card__btn-close');
		this.informatiosInputs = document.querySelectorAll('.informatios__input');
		this.informatiosBtnBay = document.querySelector('.informatios_button-bay');

		this.libraryCard.addEventListener('click', () => {
			this.changeLibraryCard();
		})
		this.closeBtn.addEventListener('click', () => {
			this.changeLibraryCard();
		})
	}

	changeLibraryCard() {
		this.libraryCard.classList.toggle('open');
	}

	// buyLibraryCard()
}