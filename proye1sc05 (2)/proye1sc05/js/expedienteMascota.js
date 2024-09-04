const btnEliminar = document.getElementById("btn-eliminar")
const btnEditar = document.getElementById("btn-editar")

btnEditar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Está seguro que desea editar esta mascota?',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Editar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('¡Editado!', '', 'success')
        }
    })

})


btnEliminar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Está seguro que desea eliminar la información?',
        text: "Esta acción no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, eliminar!',
        cancelButtonText: 'Cancelar'

    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                '¡Registro eliminado!',
                'El usuario fue borrado',
                'success'
            )
        }
    })
})