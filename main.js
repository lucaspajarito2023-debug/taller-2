const sonidoMotor = new Audio('https://www.soundjay.com/transportation/sounds/car-accelerating-01.mp3');

// 1. Referencias a los elementos del DOM
const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("mi-btn");
const contenedorImagen = document.getElementById("contenedorImagen");
const contenedorInfo = document.getElementById("contenedorInfo");

// 2. Base de datos ampliada (Simulando API)
const baseDeDatosCarros = [
    {
        id: "ferrari",
        nombre: "Ferrari SF-24",
        motor: "V6 de 1.6 litros Turbo Híbrido",
        velocidad: "340 km/h",
        piloto: "Charles Leclerc",
        escuderia: "Scuderia Ferrari",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "redbull",
        nombre: "Red Bull RB20",
        motor: "Honda RBPTH002 V6",
        velocidad: "351 km/h",
        piloto: "Max Verstappen",
        escuderia: "Red Bull Racing",
        traccion: "Trasera (RWD)",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.F_84qW4pvYEP_vtBy7MP8QHaHa?r=0&cb=thfvnext&w=1080&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "mclaren",
        nombre: "McLaren MCL38",
        motor: "Mercedes-AMG M15 V6",
        velocidad: "335 km/h",
        piloto: "Lando Norris",
        escuderia: "McLaren Formula 1 Team",
        traccion: "Trasera (RWD)",
        imagen: "https://wallpapers.com/images/hd/mclaren-pictures-6uwchhjtiipl1b8u.jpg"
    },
    {
        id: "mercedes",
        nombre: "Mercedes-AMG W15",
        motor: "Mercedes-AMG F1 M15 E Performance",
        velocidad: "338 km/h",
        piloto: "Lewis Hamilton",
        escuderia: "Mercedes-AMG PETRONAS F1 Team",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "astonmartin",
        nombre: "Aston Martin AMR24",
        motor: "Mercedes-AMG V6 Turbo",
        velocidad: "332 km/h",
        piloto: "Fernando Alonso",
        escuderia: "Aston Martin Aramco F1 Team",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "porsche",
        nombre: "Porsche 911 GT3 R",
        motor: "Bóxer de 6 cilindros 4.2L",
        velocidad: "310 km/h",
        piloto: "Kévin Estre",
        escuderia: "Porsche Penske Motorsport",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "lamborghini",
        nombre: "Lamborghini Huracán GT3 EVO2",
        motor: "V10 de 5.2 litros",
        velocidad: "325 km/h",
        piloto: "Mirko Bortolotti",
        escuderia: "Iron Lynx",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "alpine",
        nombre: "Alpine A524",
        motor: "Renault E-Tech RE24",
        velocidad: "334 km/h",
        piloto: "Pierre Gasly",
        escuderia: "BWT Alpine F1 Team",
        traccion: "Trasera (RWD)",
        imagen: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop"
    }
];

// 3. Función Principal de Búsqueda
async function buscarVehiculo() {
    const busqueda = inputBuscar.value.toLowerCase().trim();
    if (!busqueda) return;

    // Reproducir sonido de motor
    sonidoMotor.currentTime = 0;
    sonidoMotor.play();
    
    // Limpiar contenedores y mostrar loader
    contenedorImagen.innerHTML = '<h2 id="loader">Buscando en Pits...</h2>';
    contenedorInfo.innerHTML = '';

    // Simular retraso de red
    await new Promise(resolve => setTimeout(resolve, 800));

    // Buscar el carro (ahora también busca por nombre de piloto)
    const carroEncontrado = baseDeDatosCarros.find(carro => 
        carro.nombre.toLowerCase().includes(busqueda) || 
        carro.escuderia.toLowerCase().includes(busqueda) ||
        carro.piloto.toLowerCase().includes(busqueda)
    );

    if (carroEncontrado) {
        mostrarResultados(carroEncontrado);
    } else {
        mostrarError();
    }
}

// 4. Función para mostrar los datos
function mostrarResultados(carro) {
    contenedorImagen.innerHTML = `
        <div class="card-animal" style="height: 100%;">
            <img src="${carro.imagen}" alt="${carro.nombre}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">
        </div>
    `;

    contenedorInfo.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h2 style="font-family: 'Bebas Neue', sans-serif; font-size: 50px; margin: 0; color: #07354C;">
                ${carro.nombre.toUpperCase()}
            </h2>
            <hr style="width: 80%; border: 1px solid #07354C; margin: 20px auto;">
            <div class="specs-grid">
                <p style="max-width: 100%;"><strong>🏎️ ESCUDERÍA:</strong> ${carro.escuderia}</p>
                <p style="max-width: 100%;"><strong>⚙️ MOTOR:</strong> ${carro.motor}</p>
                <p style="max-width: 100%;"><strong>⚡ VELOCIDAD MÁXIMA:</strong> ${carro.velocidad}</p>
                <p style="max-width: 100%;"><strong>👤 PILOTO:</strong> ${carro.piloto}</p>
                <p style="max-width: 100%;"><strong>⛓️ TRACCIÓN:</strong> ${carro.traccion}</p>
            </div>
        </div>
    `;
}

// 5. Función de Error
function mostrarError() {
    contenedorImagen.innerHTML = `
        <div style="text-align: center; margin-top: 100px;">
            <p>🚫 Vehículo fuera de rango</p>
        </div>
    `;
    contenedorInfo.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <h2 style="color: #e63946;">DATOS NO ENCONTRADOS</h2>
            <p>Asegúrate de escribir bien el nombre del equipo o del piloto (ej: Alonso, Hamilton, Ferrari, Red Bull, mclaren, mercedes, Aston, porshe, Alpine).</p>
        </div>
    `;
}

// 6. Eventos
btnBuscar.addEventListener("click", buscarVehiculo);
inputBuscar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") buscarVehiculo();
});