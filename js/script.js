// Мобильное бургер-меню
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

function setMenu(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

burger.addEventListener('click', () => {
    setMenu(!nav.classList.contains('is-open'));
});

nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
});
