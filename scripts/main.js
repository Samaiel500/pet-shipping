document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('[data-js-mobile-menu]');
    const burgerTriger = document.querySelector('[data-js-burger-open]');
    if (mobileMenu && burgerTriger) {
        const mobileMenuClose = mobileMenu.querySelector('[data-js-mobile-menu-close]');

        burgerTriger.addEventListener('click', function() {
            overlayOpen();
            mobileMenu.classList.add('active');
        })

        mobileMenuClose.addEventListener('click', function() {
            overlayClose();
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
              clickable: true,
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

    const advantagesSwiper = document.querySelector('.our-advantages__swiper');
    if (advantagesSwiper) {
        const swiperAdvantages = new Swiper(advantagesSwiper, {
            slidesPerView: 1,
            spaceBetween: 20,
            grid: {
                rows: 1,
                fill: "row",
            },
            pagination: {
                el: ".our-advantages__swiper-pagination",
                clickable: true,
            },

            breakpoints: {
                319: {
                    slidesPerView: 1,
                    grid: {
                        rows: 1,
                        fill: "row",
                    },
                },

                428: {
                    slidesPerView: 2,
                    grid: {
                        rows: 1,
                        fill: "row",
                    },
                },

                768: {
                    slidesPerView: 3,
                    grid: {
                        rows: 1,
                        fill: "row",
                    },
                },

                1024: {
                    slidesPerView: 4,
                    grid: {
                        rows: 2,
                        fill: "row",
                    },
                },
            }
        });
    }

    const gallerySwiper = document.querySelector('.gallery__swiper');
    if (gallerySwiper) {
        const swiperGallery = new Swiper(gallerySwiper, {
            slidesPerView: 1,
            spaceBetween: 20,
          
            pagination: {
              el: '.gallery__swiper-pagination',
              clickable: true,
            },

            navigation: {
                nextEl: '.gallery__swiper-button-next',
                prevEl: '.gallery__swiper-button-prev',
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

    const tabs = document.querySelectorAll('[data-js-tabs]');

    if (tabs) {
        tabs.forEach(tab => {
            const tabTriggers = tab.querySelectorAll('[data-js-tabs-trigger]');

            tabTriggers.forEach(trigger => {
                trigger.addEventListener('click', (ev) => {
                    const triggerElement = ev.currentTarget;
                    const valueTriggerData = triggerElement.dataset.jsTabsTrigger;
                    const elementData = tab.querySelector(`[data-js-tabs-element=${valueTriggerData}]`)
                    if (valueTriggerData && elementData) {
                        tab.querySelector('[data-js-tabs-trigger].active').classList.remove('active');
                        tab.querySelector('[data-js-tabs-element].active').classList.remove('active');

                        triggerElement.classList.add('active');
                        elementData.classList.add('active');
                    }
                })
            })
        })
    }

    const input = document.querySelector("#tel");
    window.intlTelInput(input, {
        // i18n: ru,
        initialCountry: "ru",
        loadUtils: () => import("../scripts/lib/utils.js"),
    });

    const popupBtns = document.querySelectorAll('[data-js-popup-show]');
    if (popupBtns) {
        popupBtns.forEach(popupBtn => {
            popupBtn.addEventListener('click', function(ev) {
                const btn = ev.currentTarget;
                const popupId = btn.dataset.jsPopupShow;
                if (popupId) {
                    const popup = document.querySelector(`[data-js-popup=${popupId}]`);
                    overlayOpen();
                    popup.classList.add('active');
                }
                
            })
        })
    }

    const popupBtnClose = document.querySelectorAll('[data-js-popup-close]');
    if (popupBtnClose) {
        popupBtnClose.forEach(btnClose => {
            btnClose.addEventListener('click', function(ev) {
                const windowPopup = ev.currentTarget.closest('[data-js-popup]');
                windowPopup.classList.remove('active');
                overlayClose();
            })
        })
    }

    const moreInfoWraps = document.querySelectorAll('[data-js-more]');
    if (moreInfoWraps) {
        moreInfoWraps.forEach(moreWrap => {
            const moreBtn = moreWrap.querySelector('[data-js-more-btn]');
            const moreHiddenEl = moreWrap.querySelectorAll('[data-js-more-hidden]');
            
            moreBtn.addEventListener('click', function() {
                moreHiddenEl.forEach(el => {
                    el.classList.add('active');
                })
                moreBtn.classList.add('visually-hidden')
            })
        })
    }

    function overlayOpen() {
        const overlay = document.querySelector('[data-js-overlay]');
        if (overlay) {
            overlay.classList.add('active');
            scrollLock();
        }
    }

    function overlayClose() {
        const overlay = document.querySelector('[data-js-overlay]');
        if (overlay) {
            overlay.classList.remove('active');
            scrollUnLock();
        }
    }

    function overlayTrigger() {
        const overlay = document.querySelector('[data-js-overlay]');
        if (overlay) {
            overlay.classList.toggle('active');
            if (overlay.classList.contains('active')) {
                scrollLock();
                return;
            }
            scrollUnLock();
        }
    }

    function scrollLock() {
        document.body.style.overflow = 'hidden';
    }

    function scrollUnLock() {
        document.body.style.overflow = 'unset';
    }
})