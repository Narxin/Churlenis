let burger = document.querySelector('.burger-menu');
let nav = document.querySelector('.header__top__nav');
burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    nav.classList.toggle('active');
});

$('.courusel').slick();