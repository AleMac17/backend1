window.addEventListener("load",function(){
    const formulario = document.querySelector('#nuevo-odontologo');
    formulario.addEventListener('submit',function(event){
        event.preventDefault();
        const formData ={
            nombre: document.querySelector('#nombre').value,
            apellido: document.querySelector('#apellido').value,
            matricula:document.querySelector('#matricula').value,
        };
        
        const url = '/odontologos/crear';
        const setting = {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData)
        }

        fetch(url, setting)
        .then(response=>response.json())
        .then(data=>{
            let successAlert = '<p>Se ha enviado</p>';
            let botonAlta = '<button onclick="window.location.href = \'/site/alta-odontologo.html\'" id="myButton" class=\'float-left submit-button\'>Crear otro Odontologo</button>';
            let botonLista = '<button onclick="window.location.href = \'/site/lista-odontologo.html\'" id="myButton" class=\'float-left submit-button\'>Ver todos los Odontologos</button>';
            document.querySelector('.main-form').innerHTML = successAlert + botonAlta + botonLista;
            document.querySelector('.main-form').style.display="block";
            })
        .catch(error =>{
            let errorAlert = '<p>Se ha enviado</p>';
            document.querySelector('.main-form').innerHTML = errorAlert;
            document.querySelector('.main-form').style.display="block";

        })
    })
})
    

    