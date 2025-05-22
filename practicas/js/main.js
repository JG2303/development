document.addEventListener('DOMContentLoaded', function(){
    const boton = document.querySelector('[data-hamburger="boton"]');
    const desenfoque = document.querySelector('.desenfoque');
    const menu = document.querySelector('[data-hamburger="menu"]');
    const links = document.querySelectorAll('#main-menu a');
    const tema = document.querySelector('.tema');
    const body = document.body;
    boton.addEventListener('click', function(){
        const isExpanded = this.getAttribute('aria-expanded')==="true";
        this.setAttribute('aria-expanded', !isExpanded);
        menu.setAttribute('aria-hidden', isExpanded);
        desenfoque.classList.toggle('active') ;
    });
    links.forEach(link=>{
        link.addEventListener('click', function(){
            menu.setAttribute('aria-hidden','true');
            boton.setAttribute('aria-expanded','false');
            desenfoque.classList.remove('active');
        });
    });
    desenfoque.addEventListener('click', function(){
        menu.setAttribute('aria-hidden','true');
        boton.setAttribute('aria-expanded','false');
        desenfoque.classList.remove('active');        
    });
    // tema
    tema.addEventListener('click', function(){
        if(body.getAttribute("data-theme")==="dark"){
            body.removeAttribute("data-theme");
            tema.textContent = "🌛"
        }else{
            body.setAttribute("data-theme", "dark")
            tema.textContent="🌤️";
        }
    });
});
