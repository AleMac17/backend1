window.addEventListener("load", function () {
  const formulario = document.querySelector("#nuevo-turno");
  let pacienteId = document.querySelector("#paciente_id").value;

  document.querySelector("enviar").addEventListener("submit",function (event) {
    let  jsonPaciente;
    event.preventDefault();
    //con fetch invocamos a la API de estudiantes con el método GET
    //nos devolverá un JSON con una colección de estudiantes
    const url = "/pacientes/"+pacienteId;
    const settings = {
      method: "GET",
    };
    fetch(url, settings)
      .then((response) => response.json())
      .then((pacienteData) => {jsonPaciente =pacienteData;
      });
  })
  //Ante un submit del formulario se ejecutará la siguiente funcion
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      fechaDeTurno: document.querySelector("#fechaDeTurno").value,
      paciente: {
        pacienteData,
      },
      odontologo: {
        calle: document.querySelector("#calle").value,
        numero: document.querySelector("#numero").value,
        localidad: document.querySelector("#localidad").value,
        provincia: document.querySelector("#provincia").value,
      },
    };
    const url = "/turnos/crear";
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url, settings)
      .then((response) => response.json())
      .then((dataturno) => {
        //Si no hay ningun error se muestra un mensaje diciendo que el turno se agrego bien
        let successAlert = "<p>Se ha enviado</p>";
        document.querySelector(".main-form").innerHTML = successAlert;
        document.querySelector(".main-form").style.display = "block";
      })
      .catch((error) => {
        let errorAlert = "<p>No Se ha enviado</p>";

        document.querySelector(".main-form").innerHTML = errorAlert;
        document.querySelector(".main-form").style.display = "block";
        //se dejan todos los campos vacíos por si se quiere ingresar otro turno
      });
  });
});
