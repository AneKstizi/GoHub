document.addEventListener("DOMContentLoaded", function() {

  const hamburger = document.querySelector('.hamburger-icon');
  const overlay = document.querySelector('.overlay');
  const menuMobile = document.querySelector('.nav__menu--mobile');
  const menuMobileItem = document.querySelectorAll('.nav__item--mobile')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('menu--active')

    if (menuMobile.classList.contains('menu--active')) {
      document.body.style.overflow = 'hidden';
      TweenMax.staggerFrom('.nav__item--mobile', 1, {
          opacity: 0,
          y: 20,
          ease: Expo.easeInOut
        }, 0.2
      )
      TweenMax.from('.nav__logo__line', 1, {
          delay: 1,
          width: 0,
          ease: Expo.easeInOut
        }
      )
    } else {
      document.body.style.overflow = 'auto';
    }

  })

  menuMobileItem.forEach(element => {
    element.addEventListener('click', () => {
      menuMobile.classList.remove('menu--active');
      hamburger.classList.remove('active');
      document.body.style.overflow = 'auto';
    })
  });

  setTimeout(() => {
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  }, 1000)


  // TweenMax

  TweenMax.staggerFrom('.nav__item', 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    }, 0.2
  )
  TweenMax.from('.nav__logo', 1.5, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    }
  )
  TweenMax.from('.header__descr', 1.5, {
      delay: 1.1,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut
    }
  )
  TweenMax.from('.header__bg__wrapper', 1, {
      delay: 1.3,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut
    }
  )
});