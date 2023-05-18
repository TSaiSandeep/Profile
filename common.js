const navMenu = document.getElementById( 'nav-menu'),
navToggle = document.getElementById( 'nav-toggle'),
navClose = document.getElementById( 'nav-close');
/*================== Menu Show ============================*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
    navMenu.classtist.add('show-menu');
    });
}

/*===================== Hide Show =========================*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    });
}
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document. getElementById( 'nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*===== Menu Show =====*/
/* Validate if constant exists */

/*===== Hide Show =====*/
/* Validate if constant exists */

/*=============== Remove Menu Mobile =============== */

/*=============== Background Header =============== */

/*=============== Contact Form =============== */

/*=============== Style Switcher =============== */
