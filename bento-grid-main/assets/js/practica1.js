const hamburgerBtn = document.querySelector('[data-hamburger = "boton"]');
const menu = document.querySelector('[data-hamburger = "menu"]');
const overlay=document.querySelector('.overlay');
const menuLinks = document.querySelector('#main-menu a');

hamburgerBtn.addEventListener('click', function(){    
    const isExpanded = this.getAttribute('aria-expanded')=== "true";
    this.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', function(){
     hamburgerBtn.setAttribute('aria-expanded' , 'false');
     menu.setAttribute('aria-hidden','true')
     overlay.classList.remove('active');
});

