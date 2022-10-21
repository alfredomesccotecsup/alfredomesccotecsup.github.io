'use strict'

const documentReady = () => {
    const Contactar = document.getElementById("Contactar");

    const validar_datos_ingresados = (e) =>{
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const email = document.getElementById("email").value;
        const celular = document.getElementById("celular").value;
        let mensaje;
        let opcion;
        let informacion=['celular', 'correo'];

        while (true) {
            if(nombre==='' || apellido ==='' || email ==='' || parseInt(celular) ===''){
                alert("Ingresar sus datos, por favor");
                location.reload();
                break;
            }
            else{
                opcion=parseInt(prompt("¿Por cuál medio te gustaría contactarnos? 1:celular, 2:correo"));
                if(opcion===1){
                    mensaje = `Hola ${nombre}, en las proximas horas te enviaremos un mensaje por tu ${informacion[0]} ${parseInt(celular)} para asi cominicarnos`;
                }
                else{
                    if(opcion==2){
                        mensaje = `Hola ${nombre}, en las proximas horas te enviaremos un mensaje por tu ${informacion[1]} ${email} para asi cominicarnos`;
                    }
                    else{
                        mensaje = `Hola ${nombre}, ingresa una opción correcta, por favor`;
                    }
                }
                alert(mensaje);
                console.log(nombre);
                console.log(apellido);
                console.log(celular);
                console.log(parseInt(email));
                location.reload();
                break;
            }
        }
    }

    Contactar.addEventListener('click', validar_datos_ingresados);
}

window.document.addEventListener('DOMContentLoaded', documentReady);