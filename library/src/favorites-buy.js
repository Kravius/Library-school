import LoginMenu from "./profiles/log-in.js"
export default (function () {
	const favoritesBtnBuy = document.querySelectorAll('.favorites__book button');
	const user = JSON.parse(localStorage.getItem('users'));
	favoritesBtnBuy.forEach(btn => {
		btn.addEventListener('click', (ev) => {
			//check do we have activ user or not
			if (user) {
				console.log(123)
				let loginMenu = new LoginMenu();
				loginMenu.closeButton.addEventListener('click', () => {
					const removeLoginMenu = ev.target.nextElementSibling;
					if (removeLoginMenu) {
						const paretElement = removeLoginMenu.parentNode;
						paretElement.removeChild(removeLoginMenu);
					}
				})
				ev.target.insertAdjacentElement('afterend', loginMenu.container);
				const closestContainerLogin = ev.target.nextElementSibling;
				console.log(closestContainerLogin)
				if (closestContainerLogin) {
					closestContainerLogin.classList.add('open');
				}
			}
			if (!user) {
				// let loginMenu = new LoginMenu();
				// loginMenu.closeButton.addEventListener('click', () => {
				// 	const removeLoginMenu = ev.target.nextElementSibling;
				// 	if (removeLoginMenu) {
				// 		const paretElement = removeLoginMenu.parentNode;
				// 		paretElement.removeChild(removeLoginMenu);
				// 	}
				// })
				// ev.target.insertAdjacentElement('afterend', loginMenu.container);
				// const closestContainerLogin = ev.target.nextElementSibling;
				// console.log(closestContainerLogin)
				// if (closestContainerLogin) {
				// 	closestContainerLogin.classList.add('open');
				// }
			}
		})
	})
})();