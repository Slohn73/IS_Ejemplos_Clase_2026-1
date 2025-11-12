// Componente mejorado

const productos = [
    {nombre:"Xbox720", precio:30000, img:"https://assetsio.gnwcdn.com/20111005xbox720.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp"},
    {nombre:"Playstation 6", precio:30000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKqFPj1wgMdvOOxZDLpREjkMldrRra3MSag&s"},
    {nombre:"Xbox720", precio:30000, img:"https://assetsio.gnwcdn.com/20111005xbox720.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp"},
    {nombre:"Playstation 6", precio:30000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKqFPj1wgMdvOOxZDLpREjkMldrRra3MSag&s"},
    {nombre:"Xbox720", precio:30000, img:"https://assetsio.gnwcdn.com/20111005xbox720.jpg?width=1200&height=600&fit=crop&enable=upscale&auto=webp"},
    {nombre:"Playstation 6", precio:30000, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKqFPj1wgMdvOOxZDLpREjkMldrRra3MSag&s"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod => {
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});