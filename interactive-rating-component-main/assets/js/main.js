document.addEventListener('DOMContentLoaded', function(){
    const calificacion = document.querySelectorAll('.btn');
    const btnEnviar = document.querySelector('.btn-enviar');
    const main = document.querySelector('main');
    let seleccion = null;
    calificacion.forEach(estrella =>{
        estrella.addEventListener('click', function(){
            calificacion.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
            seleccion= this.textContent;
        })
    });

    btnEnviar.addEventListener('click', ()=>{
        main.classList.add('enviado');
        main.innerHTML = `
            <figure>
                <img src="assets/images/illustration-thank-you.svg" alt="icono de estrella">
            </figure>
            <section class="item-selected">
                <span>You selected ${seleccion} out of 5</span>
            </section>
            <article class="content">
                <h1>Thank you!</h1>
                <p> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>            
            </article>
        `
    });
    

});