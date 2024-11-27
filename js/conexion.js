async function listarProductos() {
    const conexion = await fetch("http://localhost:3000/productos")
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function registrarProductos(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            nombre,
            precio,
            imagen
        })
    })
    const conexionConvertida = await conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

async function eliminarProducto(codProducto) {
    try {
        const conexion = await fetch(`http://localhost:3000/productos/${codProducto}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!conexion.ok) {
            throw new Error("Error al eliminar el producto");
        }

        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error(error);
        throw new Error("Ocurrió un error al intentar eliminar el producto");
    }
}

export const conexion = {
    listarProductos,
    registrarProductos,
    eliminarProducto
}