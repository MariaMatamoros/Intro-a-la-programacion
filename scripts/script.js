
function toggleBloque() {
    var demo = document.getElementById("operationsContainer");
    if (demo.style.display === "none") {
        demo.style.display = "block";
        document.getElementById("toggleBloque").textContent = "Ocultar Operaciones";
    } else {
        demo.style.display = "none";
        document.getElementById("toggleBloque").textContent = "Mostrar Operaciones";
    }    
}

function validarVacios(resultado,operacion) {
        if(!isNaN(resultado)) {
            imprimirMensaje(operacion,resultado);
        } else {
            document.getElementById('result').textContent = "Debe ingresar valores numericos";
        }
    }

function operaciones(op)
{

    let ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        }
    }


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML;
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML;
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    /*Si se han introducido los números en ámbas cajas, operamos*/
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: rgb(20, 90, 194);'>"+resultado+"</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: rgb(20, 90, 194);'>"+resultado+"</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: rgb(20, 90, 194);'>"+resultado+"</span>";
                break;

        }
    }

}

    
    