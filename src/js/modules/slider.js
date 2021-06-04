// import Swiper JS
import Swiper, {Mousewheel, Navigation, Pagination, EffectFade, Autoplay, Scrollbar} from "swiper";
import resizeEvent from "../utils/triggerResizeEvent";
import getIndex from '../utils/getIndex';
// import Swiper styles
import 'swiper/swiper-bundle.css';
import LazyLoad from "vanilla-lazyload";

Swiper.use([Mousewheel, Navigation, Pagination, EffectFade, Autoplay, Scrollbar]);

const sliderModule = () => {

    const lazyLoadInstance = new LazyLoad(  { 
        elements_selector: '.lazy-load',
        class_loaded: 'lazy-load--loaded',
        threshold: (window.innerHeight / 5)
     });

    const initSwiper = (el, options) => {

        options.init = false;

        const carousel = new Swiper(el, options);

        carousel.on('init', () => {
            window.dispatchEvent(resizeEvent);

            galleryController(el, carousel);

        });

        carousel.init();

        carousel.on('slideChangeTransitionEnd', () => {
            window.dispatchEvent(resizeEvent);
            lazyLoadInstance.update();
        });
    };

    document.querySelectorAll('.live-search__carousel').forEach(element => {

        initSwiper(element, {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                560: {
                  slidesPerView: 2,
   
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }
          
        });

    });

    document.querySelectorAll('.logos__slider').forEach(element => {

        initSwiper(element, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            breakpoints: {
                1024: {
                  slidesPerView: 6,
                }
            }
        });

    });

    document.querySelectorAll('.card-carousel__slider').forEach(element => {

        initSwiper(element, {
            slidesPerView: 'auto',
            spaceBetween: 12,
            navigation: {
                nextEl: element.closest('section').querySelector('.swiper-button-next'),
                prevEl: element.closest('section').querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                1024: {
                  spaceBetween: 20,
                }
            }
        });

    });

    document.querySelectorAll('.post-carousel__slider').forEach(element => {

        const slideType = element.getAttribute('data-slidestype');

        initSwiper(element, {
            slidesPerView: slideType === 'Numbered' || slideType === 'Post' ? 1 : 2,
            spaceBetween: 12,
            navigation: {
                nextEl: element.closest('section').querySelector('.swiper-button-next'),
                prevEl: element.closest('section').querySelector('.swiper-button-prev'),
            },
            scrollbar: {
                el: element.closest('section').querySelector('.swiper-scrollbar'),
            },
            breakpoints: {
                1024: {
                  spaceBetween: 20,
                  slidesPerView: element.getAttribute('data-slidesperview') || 4,
                }
            }
        });

    });

    document.querySelectorAll('.product-gallery__slider').forEach(element => {

        initSwiper(element, {
            slidesPerView: 1,
            spaceBetween: 20,
        });

    });


    document.querySelectorAll('.product-gallery__nav').forEach(element => {

        calculateGalleryHeight();

        initSwiper(element, {
            direction: 'vertical',
            slidesPerView: 6,
            spaceBetween: 12,
            mousewheel: true
        });

    });

    document.querySelectorAll('.tag-slider').forEach(element => {

        calculateGalleryHeight();

        initSwiper(element, {
            slidesPerView: 'auto',
            spaceBetween: 12
        });

    });

    function galleryController(element) {

        element.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.addEventListener('click', (e) => {
                element.closest('section').querySelector('.product-gallery__slider').swiper.slideTo(getIndex(e.currentTarget));
            });
        });

    }

    function calculateGalleryHeight() {

        const galleryNav = document.querySelectorAll('.product-gallery__nav');

        galleryNav.forEach((element) => {
            const galleryHeight = element.closest('section').querySelector('.product-gallery__slider').offsetHeight;

            element.style.height = galleryHeight + 'px';
        });

    }


    let t;

    const updateDimensions = () => {

        clearTimeout(t);

        if (updateDimensions._tick) {
            cancelAnimationFrame(updateDimensions._tick);
        }

        updateDimensions._tick = requestAnimationFrame(function () {
            updateDimensions._tick = null;

            t = setTimeout(() => {
                calculateGalleryHeight();
            }, 500);
        });

    };

    window.addEventListener('resize', updateDimensions);

};

export { sliderModule };