let search_input = document.getElementById('search_input');
let contenido = document.getElementById('contenido');
let personajes = JSON.parse(file) //reconstruye el objeto

function CrearHtml(){
    personajes.results.forEach((personaje) =>{
        const card = document.createElement("div");
        card.classList.add("col-sm-3", "d-flex", "flex-column", "articulo", "p-1");
        card.innerHTML = `
        <img class="border border-warning border-4 rounded-4" src="${personaje.image}">
        <h2> Nombre:${personaje.name}</h2> 
        
        `;
        // <button class="btn btn-primary" type="button"">Conocer mas</button>
        container_card.appendChild(card);
    });
}

function search(){
    let personaje = search_personaje(search_input.value)
    contenido.innerHTML = `
    <div class = "d-flex flex-column col-sm-3">
        <img class="border border-warning border-4 rounded-4" src="${personaje.image}">
        <h2> Nombre:${personaje.name}</h2> 
        <h2> Tamaño:${personaje.height}</h2> 
        <h2> Género:${personaje.gender}</h2> 
    </div>
    `
}

function search_personaje(personaje_name){
    for(let i = 0; i < personajes.results.length; i++){
        // console.log(personajes.results[i].name)

        if(personajes.results[i].name.toLowerCase() == personaje_name){
            return personajes.results[i];
        }
    }
}

// console.log(personajes.results) //imprime el array
CrearHtml();