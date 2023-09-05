import ActiveProfile from './active-profile.js';

export default (function () {
	const activeUserFromStorage = JSON.parse(localStorage.getItem('user'));
	console.log(activeUserFromStorage)
	if (!activeUserFromStorage) {
		return;
	}
	console.log(123)
	let activeProfile = new ActiveProfile(activeUserFromStorage);
	activeProfile.openPaymentsActiveWrapper();
	activeProfile.changeProfileIcon(activeUserFromStorage.firstName, activeUserFromStorage.lastName)
	document.querySelector('.header__wrapper').append(activeProfile.container);
})()