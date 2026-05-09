console.log("Conectado correctamente");
// input
const inputBuscar = document.getElementById("inputBuscar");
//boton
const botonBuscar=document.getElementById("mi-btn");
//contenedores
const contenedorimage=document.getElementById("contenedorImagen")

const contenedorInfo=document.getElementById("contenedorInfo")

const loader = document.getElementById("loader")

let animales=[]
const informacionAnimales = [

    {
        nombre: "León",
        descripcion: "El león es un felino salvaje conocido como el rey de la selva.",
        habitat: "Sabana africana",
        alimentacion: "Carnívoro"
    },

    {
        nombre: "Tigre",
        descripcion: "El tigre es el felino más grande del mundo.",
        habitat: "Bosques de Asia",
        alimentacion: "Carnívoro"
    },

    {
        nombre: "Pantera",
        descripcion: "La pantera negra destaca por su agilidad y fuerza.",
        habitat: "Selvas tropicales",
        alimentacion: "Carnívoro"
    },

    {
        nombre: "Jaguar",
        descripcion: "El jaguar vive principalmente en América.",
        habitat: "Selvas y bosques",
        alimentacion: "Carnívoro"
    },

    {
        nombre: "Leopardo",
        descripcion: "El leopardo es rápido y excelente cazador.",
        habitat: "África y Asia",
        alimentacion: "Carnívoro"
    }

]; 

async function obtenerAnimlaes(){
    try{
        const respuesta= await fetch("https://gdbrowser.com/api")

        const datos = await respuesta.json();

        console.log(datos)
        animales= datos;
        mostrarAnimales()
        loader.style.display="none"
    } catch (error){
        console.log("ocurrio un error")
    }
}
obtenerAnimlaes()

botonBuscar.addEventListener("click", buscarAnimal)
inputBuscar.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        buscarAnimal()
    }
})
function mostrarAnimales(){

    contenedorImagen.innerHTML = "";

    animales.forEach((animal, index) => {

        contenedorImagen.innerHTML += `

    <div class="card-animal">

        <img
            src="${animal.url}"
            alt="animal"
            onclick="mostrarInformacion(${index})"
        >

    </div>

        `; 
    });

} 
function mostrarInformacion(index){

    const info = informacionAnimales[index % informacionAnimales.length];

    contenedorInfo.innerHTML = `

        <h2>${info.nombre}</h2>

        <p>
            <strong>Descripción:</strong>
            ${info.descripcion}
        </p>

        <p>
            <strong>Hábitat:</strong>
            ${info.habitat}
        </p>

        <p>
            <strong>Alimentación:</strong>
            ${info.alimentacion}
        </p>

    `;

} 
function buscarAnimal(){

    const texto = inputBuscar.value.toLowerCase();

    const animalEncontrado = informacionAnimales.find((animal) =>
        animal.nombre.toLowerCase().includes(texto)
    );

    if(animalEncontrado){

        contenedorInfo.innerHTML = `

            <h2>${animalEncontrado.nombre}</h2>

            <p>
                <strong>Descripción:</strong>
                ${animalEncontrado.descripcion}
            </p>

            <p>
                <strong>Hábitat:</strong>
                ${animalEncontrado.habitat}
            </p>

            <p>
                <strong>Alimentación:</strong>
                ${animalEncontrado.alimentacion}
            </p>

        `;

    } else {

        contenedorInfo.innerHTML = `
       
            <h2>Animal no encontrado</h2>

            <p>
                Intenta buscar:
                León, Tigre, Jaguar, Pantera o Leopardo
            </p>

        `;

    }

} 