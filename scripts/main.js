document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('[data-js-mobile-menu]');
    const burgerTriger = document.querySelector('[data-js-burger-open]');
    if (mobileMenu && burgerTriger) {
        const mobileMenuClose = mobileMenu.querySelector('[data-js-mobile-menu-close]');

        burgerTriger.addEventListener('click', function() {
            overlayTrigger()
            mobileMenu.classList.add('active');
        })

        mobileMenuClose.addEventListener('click', function() {
            overlayTrigger()
            mobileMenu.classList.remove('active');
        })
    }

    const servicesSwiper = document.querySelector('.services__swiper');
    if (servicesSwiper) {
        const swiperServices = new Swiper(servicesSwiper, {
            slidesPerView: 1,
            spaceBetween: 20,
          
            pagination: {
              el: '.services__swiper-pagination',
            },

            breakpoints: {
                319: {
                    slidesPerView: 1,
                },

                427: {
                    slidesPerView: 2,
                },

                767: {
                    slidesPerView: 3,
                },
                
                1024: {
                    slidesPerView: 4,
                }
            }
        });
    }


    function overlayTrigger() {
        const overlay = document.querySelector('[data-js-overlay]');
        if (overlay) {
            overlay.classList.toggle('active');
        }
    }
})