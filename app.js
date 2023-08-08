//declaracion de variables

let container= document.getElementById('container')
let colores=['#484CE8','#EF842B','#73E37A','#7390E3','#7390E3','#E31D68',]
let cantidadCuadraditos= 4042






//funciones

function obtenerColor(misdivs){
    let color=randomColor()
    misdivs.style.background=colores[color]
}

function randomColor(){
    let resultado= Math.floor(Math.random()*colores.length)
    return resultado
}


//for

for (let i = 0; i < cantidadCuadraditos; i++) {
    let cuadraditos= document.createElement('div')
    cuadraditos.classList.add('estilo-cuadraditos')
    container.appendChild(cuadraditos)
    cuadraditos.addEventListener('mouseover', ()=>{
        obtenerColor(cuadraditos)
    })
}

