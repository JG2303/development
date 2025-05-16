document.addEventListener('DOMContentLoaded', ()=>{    
    const acordionItem = document.querySelectorAll('.item-acordion');
    acordionItem.forEach(item =>{
        const header = item.querySelector('.btn-acordion-header');
        const content = item.querySelector('.acordion-content');
        header.addEventListener('click',()=>{
            const isOpen = content.classList.contains('active');
            if(!isOpen){
                content.classList.add('active');
                content.style.maxheight = content.scrollHeight + 'px';
            }else{
                content.classList.remove('active')
                content.style.maxheight=null;
                // setTimeout(()=>content.classList.remove('active'),3000);
            }
        });
    })
});