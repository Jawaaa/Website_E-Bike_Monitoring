// alert("Hello Me!");

const navbarNav = document.querySelector ('.navbar-nav');
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
