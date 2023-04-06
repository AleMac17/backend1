window.addEventListener('load', function () {
    let turnoId = document.querySelector('#turno_id').value;
  
      (function(){
        //con fetch invocamos a la API de estudiantes con el método GET
        //nos devolverá un JSON con una colección de estudiantes
        const url = '/turnos';
        const settings = {
          method: 'GET'
      }
      fetch(url,settings)
      .then(response => response.json())
      .then(data => {
           //recorremos la colección de estudiantes del JSON
           for(turno of data){
            //por cada estudiante armaremos una fila de la tabla
            //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos
            //el estudiante
  
            var table = document.getElementById("turnoTable");
            var turnoRow =table.insertRow();
            let tr_id = 'tr_' + turno.id;
            turnoRow.id = tr_id;
  
  
            //por cada estudiante creamos un boton delete que agregaremos en cada fila para poder eliminar la misma
            //dicho boton invocara a la funcion de java script deleteByKey que se encargará
            //de llamar a la API para eliminar al estudiante
             let deleteButton = '<button' +
                                        ' id=' + '\"' + 'btn_delete_' + turno.id + '\"' +
                                        ' type="button" onclick="deleteBy('+turno.id+')" class="btn btn-danger btn_delete">' +
                                        '&times' +
                                        '</button>';
  
             //por cada estudiante creamos un boton que muestra el id y que al hacerle clic invocará
             //a la función de java script findBy que se encargará de buscar al estudiante que queremos
             //modificar y mostrar los datos del mismo en un formulario.
            let updateButton = '<button' +
                                        ' id=' + '\"' + 'btn_id_' + turno.id + '\"' +
                                        ' type="button" onclick="findBy('+turno.id+')" class="btn btn-info btn_id">' +
                                        turno.id +
                                        '</button>';
  
  
            //armamos cada columna de la fila
            //como primer columna pondremos el boton modificar
            //luego los datos del estudiante
            //como ultima columna el boton eliminar
           turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
                                '<td class=\"td_first_name\">' + turno.nombre.toUpperCase() + '</td>' +
                                '<td class=\"td_last_name\">' + turno.apellido.toUpperCase() + '</td>' +
                                '<td class=\"td_dni\">' + turno.dni + '</td>' +
                                '<td class=\"td_fechaDeAlta\">' + turno.fechaDeAlta + '</td>' +
                                '<td class=\"td_domicilioId\">' + turno.domicilio.id + '</td>' +
                                '<td class=\"td_calle\">' + turno.domicilio.calle + '</td>' +
                                '<td class=\"td_numero\">' + turno.domicilio.numero + '</td>' +
                                '<td class=\"td_localidad\">' + turno.domicilio.localidad + '</td>' +
                                '<td class=\"td_provincia\">' + turno.domicilio.provincia + '</td>' +
                                '<td>' + deleteButton + '</td>';
  
          };
  
  })
  })
  
  (function(){
    let pathname = window.location.pathname;
    if (pathname == "/turnosList.html") {
        document.querySelector(".nav .nav-item a:last").addClass("active");
    }
  })
  
  
  })
  function findBy(id) {
    const url = '/turnos'+"/"+id;
    const settings = {
        method: 'GET'
    }
    fetch(url,settings)
    .then(response => response.json())
    .then(data => {
      let turno = data;
      document.querySelector('#turno_id').value = turno.id;
      document.querySelector('#nombre').value = turno.nombre;
      document.querySelector('#apellido').value = turno.apellido;
      document.querySelector('#dni').value =turno.dni;
      document.querySelector('#fechaDeAlta').value=turno.fechaDeAlta;
      document.querySelector('#domicilio_id').value=turno.domicilio.id;
      document.querySelector('#calle').value=turno.domicilio.calle;
      document.querySelector('#numero').value=turno.domicilio.numero;
      document.querySelector('#localidad').value=turno.domicilio.localidad;
      document.querySelector('#provincia').value=turno.domicilio.provincia;
  
      //el formulario por default esta oculto y al editar se habilita
        document.querySelector('#div_turno_updating').style.display = "block";
    }).catch(error => {
        alert("Error: " + error);
    })
  }