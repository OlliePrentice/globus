import wrapMatch from '../utils/wrapMatch';

const searchModule = () => {

    const searchInput = document.querySelector('.search-input'),
        liveSearch = document.querySelector('.live-search'),
        header = document.querySelector('.main-header'),
        closeModal = document.querySelectorAll('.live-search__close,.mobile-search-close');

    function removeClasses() {
        liveSearch.classList.remove('active');
        header.classList.remove('active')
    }

    searchInput.addEventListener('keyup', () => {

        if(searchInput.value.length > 0) {

            liveSearch.classList.add('active');
            header.classList.add('active')

            const results = document.querySelector('.live-search__results').childNodes;
   
            results.forEach(element => {
                wrapMatch(element.querySelector('a'), searchInput.value);
            });

        } else {

            removeClasses();

        }

    });

    closeModal.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            removeClasses();
        })
    });
};

export { searchModule };