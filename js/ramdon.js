    var num = parseInt(Math.random()*11);
    console.log(num);
    var intentos = 0;
let formulario = document.querySelector('#formulario2');
let boton = document.querySelector('#generar');
console.log(boton)
boton.addEventListener('click', function(e) {
 
    e.preventDefault();
    num = parseInt(Math.random()*11);
    console.log(num);
})

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    let numero = document.querySelector('#numero').value;
    if (Number(numero)===num){
        intentos = intentos + 1
        swal.fire({
            icon: "success",
            title: ("Felicidades, adivinaste en "   + ( intentos ) +  " intentos"),
            background: "#b4a7d6"
        })
    } else if (Number(numero)<num){
        intentos = intentos + 1
        swal.fire({
            icon: "error",
            title: ("estas por debajo"),
            background: "#b4a7d6"
        })
    }else{
            swal.fire({
                icon: "error",
                title: ("te pasaste"),
                background: "#b4a7d6"
    })
    }
})
