export function sliderBehaviour() {
  const slideImages = document.body.querySelector('.slider-images');
  const prevBtn = document.body.querySelector("[data-slide-btn='prev']");
  const nextBtn = document.body.querySelector("[data-slide-btn='next']");
  const pageBtns = document.body.querySelectorAll('.slider-radio-btn');

  let slideImgX = 0;
  let slideCurPage = 0;
  const imgWidth = 475;

  prevBtn.addEventListener('click', () => {
    slideCurPage--;
    prevNextSlide();
  });

  nextBtn.addEventListener('click', () => {
    slideCurPage++;
    prevNextSlide();
  });

  pageBtns.forEach(
    (el) => el.addEventListener('change', (event) => slideSelect(event))
  );

  function prevNextSlide() {
    selectPageDot();
    slideMove();
  }

  function slideSelect(event) {
    slideCurPage = event.target.dataset.pagination;
    slideMove();
  }

  function slideMove() {
    slideImgX = -imgWidth * slideCurPage;
    slideImages.style.transform = `translateX(${slideImgX}px)`;
    checkSlideEnd();
  }

  function selectPageDot() {
    for (let i = 0; i < 5; i++) {
      const sliderDot = document.body.querySelector(`[data-pagination='${i}']`);

      if (i === slideCurPage) sliderDot.checked = true;
      else sliderDot.checked = false;
    }
  }

  function checkSlideEnd() {
    prevBtn.disabled = slideCurPage == 0;
    nextBtn.disabled = slideCurPage == 4;
  }

  window.addEventListener('resize', (event) => {
    slideCurPage = 0;
    slideMove();
    selectPageDot();
  });
}