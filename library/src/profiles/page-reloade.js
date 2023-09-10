import ActiveProfile from './active-profile.js';

export default (function () {
	const activeUserFromStorage = JSON.parse(localStorage.getItem('users'));
	const indexActiveUserFromStorage = JSON.parse(localStorage.getItem('activUserIndex'));
	console.log(indexActiveUserFromStorage)
	if (indexActiveUserFromStorage != 0 && !indexActiveUserFromStorage) {
		return;
	}
	let activeuser = activeUserFromStorage[indexActiveUserFromStorage];
	//передаем юзера в активный профиль
	let activeProfile = new ActiveProfile(activeuser);
	activeProfile.openPaymentsActiveWrapper();
	console.log(activeuser.firstName)
	activeProfile.changeProfileIcon(activeuser.firstName, activeuser.lastName);
	activeProfile.openPaymentsActiveWrapper();
	// activeProfile.changeCardNumberProfile();
	document.querySelector('.header__wrapper').append(activeProfile.container);
})()