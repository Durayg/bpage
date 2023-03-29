const logo = document.querySelector('.navbar-brand');
const pageLoader = document.querySelector(".page-loader");
const menuBtn = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

window.addEventListener("load", function(){
    pageLoader.classList.add("page-loader-end");
    setTimeout(function () {
        pageLoader.style.display = "none";
        logo.style.animationPlayState = "running"
    }, 1000);
})
     
menuBtn.onclick = function(){
     navbarTogglerIcon.classList.toggle('navbar-toggler-icon-active');
}