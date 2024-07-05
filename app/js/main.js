$(function () {

  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
  const heroHeight = hero.offsetHeight;
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance > lastScrollTop) {
      header.classList.remove('header--fixed');
      hero.style.marginTop = null;
    } else {
      header.classList.add('header--fixed');
      hero.style.marginTop = `${headerHeight}px`;
    }
    if (scrollDistance === 0) {
      header.classList.remove('header--fixed');
      hero.style.marginTop = null;
    }
    lastScrollTop = scrollDistance;
  });

  $(".menu__link, .logo").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.menu__btn, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.footer-top__items-contacts').toggleClass('footer-top__items-contacts--active');
    $('.header').toggleClass('header--active');
    $('body').toggleClass('lock');
  });

  function mobileOnlySlider() {
    $('.restorants__inner').slick({
      dots: true,
      arrows: false
    });
  }
  if (window.innerWidth < 768) {
    mobileOnlySlider();
  }
  $(window).resize(function (e) {
    if (window.innerWidth < 768) {
      if (!$('.restorants__inner').hasClass('slick-initialized')) {
        mobileOnlySlider();
      }
    } else {
      if ($('.restorants__inner').hasClass('slick-initialized')) {
        $('.restorants__inner').slick('unslick');
      }
    }
  });
  $('restorants__inner').on('init', function (slick) {
    $('restorants__inner').show();
  });
  const swiper = new Swiper('.swiper-container', {

    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    slidesPerView: 1,
    slidePerGroup: 1,
  });
});