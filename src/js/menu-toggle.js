const header = document.querySelector('header');
header.querySelector('.menu__icon').addEventListener('click', () => {
    header.querySelector('.menu__icon').classList.toggle('active');
    header.querySelector('.menu__body').classList.toggle('active');
}) 

// $('.menu__icon').click(function(event) {
//     console.log($(this).toggleClass('active'));
//     $('.menu__icon').toggleClass('active');
//     // if($(this).hasClass('active')){
//     //     $('body').data('scroll', $(window).scrollTop());
//     // }
//     // $('body').toggleClass('lock');
//     // if(!$(this).hasClass('active')){
//     //     $('body, html').scrollTop(parseInt($('body').data('scroll')));
//     // }
// });