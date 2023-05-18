var toggleButtons = document.querySelectorAll('#accordionSection .accordion-toggle');

toggleButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var content = this.nextElementSibling;
    content.classList.toggle('active');
  });
});
 


$(document).ready(function() {
    $('.image-accordion').click(function() {
      $(this).find('.accordion-content').slideToggle('fast');
    });
  });
  
/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target:'.project__item',
    },
    animation: {
        durations: 300,
    },
});

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

/*=============== Active Link =============== */
const navlink = document.querySelectorAll('.nav__link');
function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}
navlink.forEach((a)=> a.addEventListener('click', activeLink));

/*===============backgroundheader===================*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, add thescroll-header class to header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*================Active Work=====================*/
const linkWork = document.querySelectorAll('.category__btn');
function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}
linkWork.forEach((a)=> a.addEventListener('click', activeWork));


/*=============== Testimonials Swiper =============== */
