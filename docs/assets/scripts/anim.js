"use strict";

$(function () {
  $('.p-product-acc__list').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      //ギャラリー表示にする
      enabled: true
    }
  });
});