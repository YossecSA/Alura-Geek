import { conexion } from "./conexion.js";

const lista = document.querySelector("[data-lista]");

export default function crearCardProduct(id, nombre, imagen, precio) {
    const productCard = document.createElement("article");
    productCard.className = "product";

    productCard.innerHTML = `
        <figure class="product__image-container">
            <img class="product__image" src="${imagen}" alt="Imagen del producto">
        </figure>
        <div class="product__details">
            <span class="product__name">${nombre}</span>
            <div class="product__price-container">
                <span class="product__price"><span>$</span>${precio}</span>
                <img class="product__delete-icon" src="./assets/img/icon_trash.png" alt="Eliminar producto">
            </div>
        </div>
    `;

    return productCard;
}

async function listarProductos() {
    try {
        const listAPI = await conexion.listarProductos();
        lista.innerHTML = "";
        listAPI.forEach(product => {
            const card = crearCardProduct(product.id, product.nombre, product.imagen, product.precio);
            lista.appendChild(card);
        });
    } catch (error) {
        console.error("Error al listar productos:", error);
        lista.innerHTML = `<p>Error al cargar los productos. Por favor, intenta nuevamente más tarde.</p>`;
    }
}

listarProductos();