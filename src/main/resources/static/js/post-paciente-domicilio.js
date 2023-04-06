
window.addEventListener("load",function(){
 const formulario = document.querySelector('#nuevo-paciente');


//Ante un submit del formulario se ejecutará la siguiente funcion
formulario.addEventListener('submit', function (event) {
           event.preventDefault();
           const formData = {
                            nombre: document.querySelector('#nombre').value,
                            apellido: document.querySelector('#apellido').value,
                            dni: document.querySelector('#dni').value,
                            fechaDeAlta:document.querySelector('#fechaDeAlta').value,
                            domicilio: {
                                        calle: document.querySelector('#calle').value,
                                        numero: document.querySelector('#numero').value,
                                        localidad: document.querySelector('#localidad').value,
                                        provincia: document.querySelector('#provincia').value,
                                      }
                             }
           const url = '/pacientes/crear';
           const settings = {
                        method: 'POST',
                        headers: {
                                  'Content-Type': 'application/json',
                                  },
                         body: JSON.stringify(formData)
                          }
           fetch(url,settings)
           .then(response => response.json())
           .then(dataPaciente =>{
                      //Si no hay ningun error se muestra un mensaje diciendo que el paciente se agrego bien
                      let successAlert = '<p>Se ha enviado</p>';
                document.querySelector('.main-form').innerHTML = successAlert;
                document.querySelector('.main-form').style.display="block";
                })
            .catch(error =>{
                let errorAlert = '<p>No Se ha enviado</p>';

                document.querySelector('.main-form').innerHTML = errorAlert;
                document.querySelector('.main-form').style.display="block";
                       //se dejan todos los campos vacíos por si se quiere ingresar otro paciente
                     })
        })})