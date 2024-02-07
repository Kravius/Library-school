export default (function () {
  const BTN_LEFT = document.querySelector("#btn-left");
  const BTN_RIGHT = document.querySelector("#btn-right");
  const sliderLine = document.querySelector(".about__carousel");
  const sliderImages = document.querySelectorAll(".about__carousel img");
  const sliderDots = document.querySelectorAll(
    ".about__carousel-buttons button"
  );
  const image = document.querySelector(".about__img");
  let imagesWidth;
  let sliderCount = 0;
  let sliderWidth;
  window.addEventListener("resize", showSlide);

  //делаем размер слайдера к разным разрешениям
  function showSlide() {
    const screenWidth = window.innerWidth;
    let numVisibleImages;
    switch (true) {
      case screenWidth >= 1024:
        numVisibleImages = 3;
        break;
      case screenWidth >= 769:
        numVisibleImages = 2;
        break;

      default:
        numVisibleImages = 1;
        break;
    }

    sliderWidth = document.querySelector(".carousel-wrapper").offsetWidth;
    // let imageWidth = (sliderWidth - gap) / numVisibleImages;
    sliderLine.style.width =
      (sliderWidth * sliderImages.length) / numVisibleImages + "px";

    sliderImages.forEach(
      (item) => (item.style.width = sliderWidth / numVisibleImages + "px")
    );
    imagesWidth = image.offsetWidth;
    rollSlider();
  }

  showSlide();

  //что б нельзя было клацать в лево
  BTN_LEFT.disabled = true;

  //листание вправо и в лево
  BTN_LEFT.addEventListener("click", prevSlider);
  BTN_RIGHT.addEventListener("click", nextSlider);

  //функция в право
  function nextSlider() {
    sliderCount++;
    BTN_LEFT.disabled = false;
    if (sliderCount >= sliderImages.length - 1) BTN_RIGHT.disabled = true;

    rollSlider();
    thisSlider(sliderCount);
  }

  function prevSlider() {
    sliderCount--;
    BTN_RIGHT.disabled = false;
    if (sliderCount < 1) BTN_LEFT.disabled = true;

    rollSlider();
    thisSlider(sliderCount);
  }

  //измеряем шерину для передвижения картинки
  function rollSlider() {
    sliderLine.style.transform = `translateX(${
      -sliderCount * (imagesWidth + 25)
    }px)`;
  }

  //активация нужной кнопки под слайдером
  function thisSlider(index) {
    sliderDots.forEach((button) => button.classList.remove("active"));
    sliderDots[index].classList.add("active");
  }

  //клик на кнопки под слайдером
  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      sliderCount = index;
      rollSlider();
      thisSlider(sliderCount);
      if (sliderDots[0].classList.contains("active")) {
        BTN_LEFT.disabled = true;
        BTN_RIGHT.disabled = false;
      }
      if (sliderDots[sliderDots.length - 1].classList.contains("active")) {
        BTN_RIGHT.disabled = true;
        BTN_LEFT.disabled = false;
      }
      if (!sliderDots[0].classList.contains("active")) {
        BTN_LEFT.disabled = false;
      }
      if (!sliderDots[sliderDots.length - 1].classList.contains("active")) {
        BTN_RIGHT.disabled = false;
      }
    });
  });
})();
