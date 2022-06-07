import $ from 'cash-dom';
import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/sw.js?v=3')
    .then(function (registration) {
      console.log('ServiceWorker registration successful with scope:', registration.scope);
    })
    .catch(function (error) {
      console.log('ServiceWorker registration failed:', error);
    });
}

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`);

  const scrollBtn = $('#btnScrollToTop')[0];

  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  $(window).on('scroll', function () {
    scrollBtn ? scrollTopBtn() : null;
  });

  const scrollTopBtn = () => (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? (scrollBtn.style.display = 'block') : (scrollBtn.style.display = 'none'));
  // const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  Array.from(document.getElementsByClassName('icon-burger')).forEach((el) => {
    el.addEventListener('click', () => {
      el.hidden = true;
      const menuType = el.classList.contains('ic-open') ? 'ic-close' : 'ic-open';
      const navCl = document.getElementById('nav-pages');

      navCl.childNodes.forEach((cEl) => {
        cEl.addEventListener('click', () => { 
          if(window.innerWidth <= 769) {
            document.getElementsByClassName('ic-open')[0].hidden = false;
            document.getElementsByClassName('ic-close')[0].hidden = true;
            navCl.classList.remove('menu-open');
          }
        });
      })

      document.getElementsByClassName(menuType)[0].hidden = false;
      menuType !== 'ic-open' ? navCl.classList.add('menu-open') : navCl.classList.remove('menu-open');
    });
  });

  if (document.getElementsByClassName('blog-select-nav').length !== 0) {
    Array.from(document.getElementsByClassName('blog-select-nav')).forEach((el) => {
      el.addEventListener('click', () => {
        document.getElementsByClassName('active')[0].classList.remove('active');
        el.classList.add('active');
        filterSelection(el.dataset.filter);
        window.dispatchEvent(new Event('resize'));
      });
    });

    const filterSelection = (c) => Array.from(document.getElementsByClassName('blog-item')).forEach((el) => (el.hidden = el.dataset.category === c ? false : c !== 'all'));
  }

  // Sliders

  new Swiper('.swiper-feedback', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  new Swiper('.blog-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });

  new Swiper('.swiper-slider', {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
  });

  new Swiper('.swiper-portfolio', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 15,
  });

  new Swiper('.swiper-business', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.nav-next',
      prevEl: '.nav-prev',
    },
  });

  new Swiper('.swiper-games', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    spaceBetween: 15,
    navigation: {
      nextEl: '.game-nav-next',
      prevEl: '.game-nav-prev',
    },
  });

  new Swiper('.swiper-networks', {
    slidesPerView: 'auto',
    // loop: true,
    // centeredSlides: true,
    spaceBetween: 15,
    navigation: {
      nextEl: '.network-nav-next',
      prevEl: '.network-nav-prev',
    },
  });

  new Swiper('.swiper-cases', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 15,
    centeredSlides: true,
    breakpoints: {
      550: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
    },
    navigation: {
      nextEl: '.case-nav-next',
      prevEl: '.case-nav-prev',
    },
  });
});
