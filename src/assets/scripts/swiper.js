"use strict";
var sliderWrap = document.querySelectorAll('.js-slider-wrap');
var sliderThumb = document.querySelectorAll('.js-slider-thumb');
var sliderMain = document.querySelectorAll('.js-slider-main');

for (var i = 0; i < sliderWrap.length; i++) {
  var num = ('00' + (i + 1)).slice(-2);
  sliderWrap[i].className += num;
  sliderThumb[i].className += num;
  sliderMain[i].className += num;
  var swiperThumb = new Swiper('.js-slider-thumb' + num, {
    slidesPerView: 'auto'
  });
  var prev = sliderWrap[i].querySelector('.js-slider-btnPrev');
  var next = sliderWrap[i].querySelector('.js-slider-btnNext');
  var swiperMain = new Swiper('.js-slider-main' + num, {
    slidesPerView: 'auto',
    effect: 'slide',
    grabCursor: true,
    touchEventsTarget: true,
    loopAdditionalSlides: 1,
    navigation: {
      nextEl: next,
      prevEl: prev
    },
    thumbs: {
      swiper: swiperThumb
    }
  });
}


const modalSwiper = new Swiper('.js-modal-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  // effect: 'fade',
  navigation: {
      prevEl: '.js-modal--btnPrev',
      nextEl: '.js-modal--btnNext',
  },
  pagination: {
      el: '.js-modal--pagi',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
          return 'Image ' + ' <span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
      }
  },
});

$('.js-modal-open').on('click', function () {
  var index = $(this).index();
  modalSwiper.slideTo(index);
  $('.l-modal').fadeIn();
  $('body').addClass('is-lock');
})

$('.js-modal-close').on('click', function () {


  $('.l-modal').fadeOut();
  $('body').removeClass('is-lock');

});

const swiper03 = new Swiper('.p-chara__slider', {
  // loop: true,
  // grabCursor: true,
  effect: 'slide',
  centeredSlides: true,
  slidesPerView: 1,
  speed: 1000,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
})

swiper03.on('slideChange', function () {
  $body.attr("data-character", swiper03.realIndex + 1);
});

$(".js-chara-tab").on("click", function () {
  $('.p-chara__item--tab').removeClass('is-active');
  $(this).addClass('is-active');
  swiper03.slideTo($(this).attr("data-num"));
});