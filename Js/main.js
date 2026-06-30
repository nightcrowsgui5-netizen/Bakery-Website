document.addEventListener('DOMContentLoaded', function(){
//Adding tooggle logic to display menu Icons:
const hamburgerMenu = document.querySelector('.hamburger-menu');
const toggler = document.querySelectorAll('.toggle')
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', function(){
    toggler.forEach( icon => { icon.classList.toggle('open')});
    navList.classList.toggle('open');
});
//Initialize Animate on Scroll lib:
AOS.init({
    easing: 'ease',
    duration: 1000
}
);

//Lightbox: clicar num card amplia a imagem
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.card-item img').forEach(function(img){
    img.addEventListener('click', function(){
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
    });
});

function closeLightbox(){
    lightbox.classList.remove('open');
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', function(e){
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') closeLightbox();
});
});