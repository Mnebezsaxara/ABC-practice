  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const catalogSwiper = new Swiper('.catalog-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.catalog-arrow.next',
    prevEl: '.catalog-arrow.prev',
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  }
});

const storesSwiper = new Swiper('.stores-swiper',{
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.stores-arrow.next',
    prevEl: '.stores-arrow.prev',
  },
  breakpoints: {
    1024: { slidesPerView: 4 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  }
});

const newsSwiper = new Swiper('.news-swiper',{
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: '.news-arrow.next',
    prevEl: '.news-arrow.prev',
  },
  breakpoints: {
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  }
});
