let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let delayedLogo = document.querySelector('.logo-delayed');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            delayedLogo.classList.add('active');
        }, (850));

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            })

            setTimeout(() => {
                delayedLogo.classList.remove('active');
                delayedLogo.classList.add('fade');
            }, (90));

        }, 2000);

        setTimeout(() => {
            intro.style.left = '-210vh'
        }, 2700);   
    })
})