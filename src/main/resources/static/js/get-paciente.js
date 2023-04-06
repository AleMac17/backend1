window.addEventListener("load", function () {
  let pacienteId = document.querySelector("#paciente_id").value;

  (function () {
    //con fetch invocamos a la API de estudiantes con el método GET
    //nos devolverá un JSON con una colección de estudiantes
    const url = "/pacientes";
    const settings = {
      method: "GET",
    };
    fetch(url, settings)
      .then((response) => response.json())
      .then((data) => {
        //recorremos la colección de estudiantes del JSON
        for (paciente of data) {
          //por cada estudiante armaremos una fila de la tabla
          //cada fila tendrá un id que luego nos permitirá borrar la fila si eliminamos
          //el estudiante

          var table = document.getElementById("pacienteTable");
          var pacienteRow = table.insertRow();
          let tr_id = "tr_" + paciente.id;
          pacienteRow.id = tr_id;

          //por cada estudiante creamos un boton delete que agregaremos en cada fila para poder eliminar la misma
          //dicho boton invocara a la funcion de java script deleteByKey que se encargará
          //de llamar a la API para eliminar al estudiante
          let deleteButton =
            "<button" +
            " id=" +
            '"' +
            "btn_delete_" +
            paciente.id +
            '"' +
            ' type="button" onclick="deleteBy(' +
            paciente.id +
            ')" class="btn btn-danger btn_delete">' +
            "&times" +
            "</button>";

          //por cada estudiante creamos un boton que muestra el id y que al hacerle clic invocará
          //a la función de java script findBy que se encargará de buscar al estudiante que queremos
          //modificar y mostrar los datos del mismo en un formulario.
          let updateButton =
            "<button" +
            " id=" +
            '"' +
            "btn_id_" +
            paciente.id +
            '"' +
            ' type="button" onclick="findBy(' +
            paciente.id +
            ')" class="btn btn-info btn_id">' +
            paciente.id +
            "</button>";

          //armamos cada columna de la fila
          //como primer columna pondremos el boton modificar
          //luego los datos del estudiante
          //como ultima columna el boton eliminar
          pacienteRow.innerHTML =
            "<td>" +
            updateButton +
            "</td>" +
            '<td class="td_first_name">' +
            paciente.nombre.toUpperCase() +
            "</td>" +
            '<td class="td_last_name">' +
            paciente.apellido.toUpperCase() +
            "</td>" +
            '<td class="td_dni">' +
            paciente.dni +
            "</td>" +
            '<td class="td_fechaDeAlta">' +
            paciente.fechaDeAlta +
            "</td>" +
            '<td class="td_domicilioId">' +
            paciente.domicilio.id +
            "</td>" +
            '<td class="td_calle">' +
            paciente.domicilio.calle +
            "</td>" +
            '<td class="td_numero">' +
            paciente.domicilio.numero +
            "</td>" +
            '<td class="td_localidad">' +
            paciente.domicilio.localidad +
            "</td>" +
            '<td class="td_provincia">' +
            paciente.domicilio.provincia +
            "</td>" +
            "<td>" +
            deleteButton +
            "</td>";
        }
      });
  })(function () {
    let pathname = window.location.pathname;
    if (pathname == "/pacientesList.html") {
      document.querySelector(".nav .nav-item a:last").addClass("active");
    }
  });
});
function findBy(id) {
  const url = "/pacientes" + "/" + id;
  const settings = {
    method: "GET",
  };
  fetch(url, settings)
    .then((response) => response.json())
    .then((data) => {
      let paciente = data;
      document.querySelector("#paciente_id").value = paciente.id;
      document.querySelector("#nombre").value = paciente.nombre;
      document.querySelector("#apellido").value = paciente.apellido;
      document.querySelector("#dni").value = paciente.dni;
      document.querySelector("#fechaDeAlta").value = paciente.fechaDeAlta;
      document.querySelector("#domicilio_id").value = paciente.domicilio.id;
      document.querySelector("#calle").value = paciente.domicilio.calle;
      document.querySelector("#numero").value = paciente.domicilio.numero;
      document.querySelector("#localidad").value = paciente.domicilio.localidad;
      document.querySelector("#provincia").value = paciente.domicilio.provincia;

      //el formulario por default esta oculto y al editar se habilita
      document.querySelector("#div_paciente_updating").style.display = "block";
    })
    .catch((error) => {
      alert("Error: " + error);
    });
}
