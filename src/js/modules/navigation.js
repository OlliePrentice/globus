import Headroom from "headroom.js";

const navigationModule = () => {

    const header = document.querySelector('.main-header'),
    navigation = document.querySelector('.navigation'),
    liveSearch = document.querySelector('.live-search'),
    mobileNavigation = document.querySelector('.mobile-navigation'),
    burger = document.querySelector('.burger');


    // Show/hide header
    const headroom  = new Headroom(header);
    headroom.init();

    /**
     * Desktop Navigation
     */

    navigation.querySelectorAll('.has-children').forEach(item => {

        item.addEventListener('mouseover', e => {
            
            menuItemStates(e.currentTarget, 'enter');
            liveSearch.classList.remove('active');
        });

        item.addEventListener('mouseleave', e => {
           
            menuItemStates(e.currentTarget, 'leave');
        });
        
    });

    
    function menuItemStates(item, type) {

        if(type === 'leave') {
            
            item.classList.remove('active');
            item.querySelectorAll('li').forEach((el) => el.classList.remove('active'));

        } else {

            item.classList.add('active');
        }

        let activeItem = false;

        document.querySelectorAll('.has-children').forEach(element => {
            if(element.classList.contains('active')) {
                activeItem = true;
            }
        });

        activeItem ? header.classList.add('active') : header.classList.remove('active');
    }


    /**
     * Mobile Navigation
     */

    // Open a sub menu
    mobileNavigation.querySelectorAll('.has-children').forEach(item => {
        const link = item.querySelector('a');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.currentTarget.parentNode.querySelector('.sub-menu').classList.add('active');
        });
    });

    // Go back a sub menu step
    mobileNavigation.querySelectorAll('.back-link').forEach(item => {

        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            e.currentTarget.closest('ul').classList.remove('active');
        });
    });

    // Remove all active mobile menu sub menus when menu is closed
    burger.addEventListener('click', (e) => {
        if(e.currentTarget.classList.contains('active')) {
            header.classList.remove('mobile-menu-active')
            mobileNavigation.querySelectorAll('ul').forEach(item => item.classList.remove('active'));
        }
    });


}
   
export { navigationModule };