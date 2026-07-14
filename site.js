// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.site-nav ul');
const nav = document.querySelector('.site-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    nav.classList.toggle('menu-open', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });
}
