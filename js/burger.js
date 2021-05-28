const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');


const toggleMenu = () => {

    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('hamburger-menu-active');
};

const closeBurger = () => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('hamburger-menu-active');
};


humburgerElem.addEventListener('click', toggleMenu)
menuElem.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('menu-list__link')) {

        closeBurger()
    }
    })