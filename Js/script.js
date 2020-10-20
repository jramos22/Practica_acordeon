const acord = document.querySelectorAll('.acord');

for(let i = 0; i < acord.length; i++){
    acord[i].addEventListener('click', (event)=>{
        event.preventDefault();
        const contenido = event.currentTarget;
        let cont = contenido.nextElementSibling;
        if (cont.style.display == "block") {
            cont.style.display = "none";
        } else {
            cont.style.display = "block";
        }
    }
    )
}