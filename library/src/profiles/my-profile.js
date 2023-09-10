export default class MyProfile {
	constructor() {
		this.user
		this.closeBtnProfile = document.querySelector('.profile-info__close-btn');

		this.profileArea = document.querySelector('.my-profile');
		this.myProfileName = document.querySelector('.my-profile__name');
		this.initials = document.querySelector('.initials');

		//count
		this.countVisits = document.querySelector('#count-visits-profile');
		this.countBonuses = document.querySelector('#count-visits-bonuses');
		this.countBook = document.querySelector('#count-visits-book');

		//add new li for book
		this.ulForAddNewBook = document.querySelector('.profile-info__books');
		this.cardNumber = document.querySelector('.card__number');
		this.cardBuferCopy = document.querySelector('.card__bufer');

		this.closeBtnProfile.addEventListener('click',(ev)=>{
			if(ev.target.classList.contains('profile-info__close-btn')){
				this.closeMyProfile();
			}
		})

		this.profileArea.addEventListener('click',(ev)=>{
			if(ev.target.classList.contains('my-profile')){
				this.closeMyProfile();
			}
		})

		this.cardBuferCopy.addEventListener('click',(ev)=>{
			if(ev.target.classList.contains('card__bufer')){
				this.copyCardOnBufer();
			}
		})
	}


	closeMyProfile() {
		this.profileArea.classList.remove('open');
		document.body.classList.remove('lock')
	}


	//делаем через активного юзера
	changeInitialsAndName(firstName, lastName) {
		this.initials.textContent = firstName.charAt(0).toUpperCase() + ' ' + lastName.charAt(0).toUpperCase();
		this.myProfileName.textContent = `${firstName} ${lastName}`;
	}

	changeCountProfile(visits, book) {
		this.countVisits.textContent = visits;
		this.countBook.textContent = book;
	}

	// addNewLiBook(){

	// }

	changeCardNumber(cardNumber){
		this.cardNumber.textContent = cardNumber;
	}

	copyCardOnBufer(){
		navigator.clipboard.writeText(this.cardNumber.textContent)
		.then(()=> console.log('good'))
		.catch(err => console.log('err'))
		// this.
	}
}