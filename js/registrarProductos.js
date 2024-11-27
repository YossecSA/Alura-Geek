import { conexion } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");

async function registrarProducto(event) {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value.trim();
    const precio = document.querySelector("[data-precio]").value.trim();
    const imagen = document.querySelector("[data-imagen]").value.trim();

    if (!nombre || !precio || !imagen) {
        Swal.fire({
            icon: "warning",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos antes de enviar.",
            confirmButtonText: "Entendido",
            confirmButtonColor: "#03318C",
        });
        return;
    }

    if (isNaN(precio) || parseFloat(precio) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Precio inválido",
            text: "El precio debe ser un número positivo.",
            confirmButtonText: "Corregir",
            confirmButtonColor: "#03318C",
        });
        return;
    }

    try {
        await conexion.registrarProductos(nombre, precio, imagen);

        Swal.fire({
            icon: "success",
            title: "Producto registrado",
            text: "El producto se registró correctamente.",
            confirmButtonText: "Continuar",
            confirmButtonColor: "#03318C",
            allowOutsideClick: false,
            allowEscapeKey: false,
        }).then(() => {
            formulario.reset();
        });
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al registrar",
            text: "Ocurrió un error al registrar el producto. Intenta nuevamente.",
            confirmButtonText: "Reintentar",
            confirmButtonColor: "#03318C",
        });
    }
}

formulario.addEventListener("submit", (event) => {
    registrarProducto(event); 
});