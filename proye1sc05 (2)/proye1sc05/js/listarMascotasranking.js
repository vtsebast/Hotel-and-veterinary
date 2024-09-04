const cuerpoTabla = document.querySelector('.tbl tbody');
const ordenarTablaBtn = document.querySelector('#btn-ordenar')

const llenartabla = () => {
    cuerpoTabla.innerHTML = "";

    mascotasRegistradas.forEach(mascotasRegistradas => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = mascotasRegistradas.nombreDuenho
        fila.insertCell().textContent = mascotasRegistradas.nombre
        fila.insertCell().innerHTML = `<img src="` + mascotasRegistradas.fotografia + `" class="table-img"></img>`
        fila.insertCell().textContent = mascotasRegistradas.direccion
        fila.insertCell().textContent = mascotasRegistradas.cuidados
        fila.insertCell().textContent = mascotasRegistradas.padecimientos
        fila.insertCell().textContent = mascotasRegistradas.calificacion !== 0 ? mascotasRegistradas.calificacion : "-"

        let tdAcciones = fila.insertCell();

        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Ver expediente';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-expediente');

        tdAcciones.appendChild(btnEditar);
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

        tdAcciones.appendChild(btnEliminar);
        btnEliminar.addEventListener('click', () => {

            window.location.href = '../html/expedienteMascota.html'

        });


    });
};

llenartabla();

sortFunction = function() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("#tbl-mascotas");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[6];
            y = rows[i + 1].getElementsByTagName("TD")[6];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

ordenarTablaBtn.addEventListener('click', sortFunction)