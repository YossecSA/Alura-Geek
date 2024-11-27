import { conexion } from "./conexion.js";

export async function eliminarProducto(id, productCard) {
    try {
        const result = await Swal.fire({
            icon: "warning",
            title: "¿Estás seguro de eliminar este producto?",
            text: "Esta acción no se puede deshacer.",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "No, cancelar",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6"
        });

        if (result.isConfirmed) {
            await conexion.eliminarProducto(id);

            Swal.fire({
                icon: "success",
                title: "Producto eliminado",
                text: "El producto ha sido eliminado correctamente.",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#03318C",
            });

            productCard.remove();
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error al eliminar",
            text: "No se pudo eliminar el producto. Intenta nuevamente.",
            confirmButtonText: "Reintentar",
            confirmButtonColor: "#03318C",
        });
    }
}
