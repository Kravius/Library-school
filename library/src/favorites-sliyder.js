export default (function () {
	const booksSeasons = document.querySelectorAll('.books');
	const radioBTNS = document.querySelectorAll('.favorites__radio input');

	//проходимся по массиву и навешиваем слушатель на каждую радио кнопку и узнаем их индекс
	// что б дальше была возможность передать индекс
	radioBTNS.forEach((radio, index) => {
		radio.addEventListener('click', () => {
			booksSeasonsSelected(index);
		})
	})

	function booksSeasonsSelected(selectedIndex) {
//проходимся по массиву блоков книг и ищем блок с классом который отображает нащу книгу
//и делмаем для него затухание
		booksSeasons.forEach((book) => {
			if (book.classList.contains('visible',)) {
				book.classList.add('fade-out');
				book.classList.remove('fade-in')

				//через 1000мс делаем его невидемым
				setTimeout(() => {
					book.classList.remove('visible', 'fade-out');
					book.classList.add('none');
				},1000);
			}
		});
		//через 1000мс добавляем классы с анимацыей что б выбранный блок книг появился с анимацией
		setTimeout(()=>{
			let selectedBook = booksSeasons[selectedIndex];
			selectedBook.classList.remove('none');
			selectedBook.classList.add('fade-in', 'visible')
		},1000);
	}

})()