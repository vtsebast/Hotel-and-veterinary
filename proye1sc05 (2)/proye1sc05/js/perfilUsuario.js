let btnEditar = document.getElementById('btn-editar')


btnEditar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Desea cambiar la información?',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Modificar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('¡Editado!', '', 'success')
        }
    })

})