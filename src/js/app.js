import 'alpinejs';
import Cookies from 'js-cookie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';

document.documentElement.classList.remove('no-js');

// Modules

import { lazyLoadModule } from './modules/lazyLoad';
import { navigationModule } from './modules/navigation';
import { searchModule } from './modules/search';
import { sliderModule } from './modules/slider';
import { formModule } from './modules/form';

// Exports

window.onload = () => {
    lazyLoadModule();
    navigationModule();
    searchModule();
    sliderModule();
    formModule();

    AOS.init({
        once: true
    })
};

// Global Exports

window.Cookies = Cookies