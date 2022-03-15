/**
 * Script para gestionar el pacman
 */

/**
 * direction:
 *  0-top
 *  1-right
 *  2-bottom
 *  3-left
 */
'use strict'
let position={
    direction:0,
    h:9,
    v:11
}
let score=0;
let speed=500;

// Dibujamos el comecocos
document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("food");
document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.add("comecocos");
document.getElementById('arriba').addEventListener('click', function a() {
    if ( canUp()) { // up
        position.direction=0;
 document.querySelector('.comecocos').style="transform:rotate(270deg)";
    } 
;

let interval=setInterval(() => {
    // Escondemos el pacman
    document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("comecocos");

    // Comprovamos si puede seguir moviendose en la misma direccion
    if (position.direction==0 && canUp()) { // up
        position.v=position.v-1;

    } 
    console.log(position.h);

    // Movemos el pacman
    const dest=document.querySelectorAll("#board>div")[(position.v*19)+position.h];

    // Comprovamos si hay un cuadro de comida
    if (dest.classList.contains("sandia")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("sandia");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (dest.classList.contains("brocoli")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("brocoli");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }

    if (dest.classList.contains("jamon")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("jamon");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (position.h==15 && position.v==0) {
         window.location.replace('juego1.html');
    }
        if (dest.classList.contains("chatarra")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("chatarra");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("perro")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("perro");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("helado")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("helado");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("dona")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("dona");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }

    // Si la casilla tiene una vitamina
    if (dest.classList.contains("energizer")) {
        // Eliminamos la vitamina
        dest.classList.remove("energizer");
        // Convertimos los fantasmas en azules
        convertBlue();
    }
    dest.classList.add("comecocos");
}, 10000);
    // body...
});
document.getElementById('abajo').addEventListener('click', function a() {
     if (canDown()) { // down
        position.direction=2; document.querySelector('.comecocos').style="transform:rotate(90deg)";
    } 

    let interval=setInterval(() => {
    // Escondemos el pacman
    document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("comecocos");

    // Comprovamos si puede seguir moviendose en la misma direccion
    if (position.direction==0 && canUp()) { // up
        position.v=position.v-1;

    } else if (position.direction==1 && canRight()) { // right
        position.h=position.h+1;
        position.h = position.h==19 ? 0 : position.h;
    } else if (position.direction==2 && canDown()) { // down
        position.v=position.v+1;
    } else if (position.direction==3 && canLeft()) { // left
        position.h=position.h-1;
        position.h = position.h==-1 ? 18 : position.h;
    }
    console.log(position.h);

    // Movemos el pacman
    const dest=document.querySelectorAll("#board>div")[(position.v*19)+position.h];

    // Comprovamos si hay un cuadro de comida
    if (dest.classList.contains("sandia")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("sandia");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (dest.classList.contains("brocoli")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("brocoli");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }

    if (dest.classList.contains("jamon")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("jamon");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (position.h==15 && position.v==0) {
         window.location.replace('juego1.html');
    }
        if (dest.classList.contains("chatarra")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("chatarra");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("perro")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("perro");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("helado")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("helado");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("dona")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("dona");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }

    // Si la casilla tiene una vitamina
    if (dest.classList.contains("energizer")) {
        // Eliminamos la vitamina
        dest.classList.remove("energizer");
        // Convertimos los fantasmas en azules
        convertBlue();
    }
    dest.classList.add("comecocos");
}, 10000);
})
document.getElementById('derecha').addEventListener('click', function a() {
         if (canRight()) { 
        position.direction=1; document.querySelector('.comecocos').style="transform:rotate(90deg)";
    } 

    let interval=setInterval(() => {
    // Escondemos el pacman
    document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("comecocos");

    // Comprovamos si puede seguir moviendose en la misma direccion
    if (position.direction==0 && canUp()) { // up
        position.v=position.v-1;

    } else if (position.direction==1 && canRight()) { // right
        position.h=position.h+1;
        position.h = position.h==19 ? 0 : position.h;
    } else if (position.direction==2 && canDown()) { // down
        position.v=position.v+1;
    } else if (position.direction==3 && canLeft()) { // left
        position.h=position.h-1;
        position.h = position.h==-1 ? 18 : position.h;
    }
    console.log(position.h);

    // Movemos el pacman
    const dest=document.querySelectorAll("#board>div")[(position.v*19)+position.h];

    // Comprovamos si hay un cuadro de comida
    if (dest.classList.contains("sandia")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("sandia");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (dest.classList.contains("brocoli")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("brocoli");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }

    if (dest.classList.contains("jamon")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("jamon");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (position.h==15 && position.v==0) {
         window.location.replace('juego1.html');
    }
        if (dest.classList.contains("chatarra")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("chatarra");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("perro")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("perro");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("helado")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("helado");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("dona")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("dona");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }

    // Si la casilla tiene una vitamina
    if (dest.classList.contains("energizer")) {
        // Eliminamos la vitamina
        dest.classList.remove("energizer");
        // Convertimos los fantasmas en azules
        convertBlue();
    }
    dest.classList.add("comecocos");
}, 10000);
})
document.getElementById('izquierda').addEventListener('click', function a() {if (canLeft()) { 
        position.direction=3; document.querySelector('.comecocos').style="transform:rotateY(180deg)";
    } 

    let interval=setInterval(() => {
    // Escondemos el pacman
    document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("comecocos");

    // Comprovamos si puede seguir moviendose en la misma direccion
    if (position.direction==0 && canUp()) { // up
        position.v=position.v-1;

    } else if (position.direction==1 && canRight()) { // right
        position.h=position.h+1;
        position.h = position.h==19 ? 0 : position.h;
    } else if (position.direction==2 && canDown()) { // down
        position.v=position.v+1;
    } else if (position.direction==3 && canLeft()) { // left
        position.h=position.h-1;
        position.h = position.h==-1 ? 18 : position.h;
    }
    console.log(position.h);

    // Movemos el pacman
    const dest=document.querySelectorAll("#board>div")[(position.v*19)+position.h];

    // Comprovamos si hay un cuadro de comida
    if (dest.classList.contains("sandia")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("sandia");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (dest.classList.contains("brocoli")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("brocoli");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }

    if (dest.classList.contains("jamon")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("jamon");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (position.h==15 && position.v==0) {
         window.location.replace('juego1.html');
    }
        if (dest.classList.contains("chatarra")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("chatarra");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("perro")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("perro");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("helado")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("helado");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("dona")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("dona");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }

    // Si la casilla tiene una vitamina
    if (dest.classList.contains("energizer")) {
        // Eliminamos la vitamina
        dest.classList.remove("energizer");
        // Convertimos los fantasmas en azules
        convertBlue();
    }
    dest.classList.add("comecocos");
}, 10000);
})

window.addEventListener("keyup", e => {
    e.preventDefault();
    if (e.code=="ArrowUp" && canUp()) { // up
        position.direction=0;
 document.querySelector('.comecocos').style="transform:rotate(270deg)";
    } else if (e.code=="ArrowRight" && canRight()) { // right
        position.direction=1;
    } else if (e.code=="ArrowDown" && canDown()) { // down
        position.direction=2; document.querySelector('.comecocos').style="transform:rotate(90deg)";
    } else if (e.code=="ArrowLeft" && canLeft()) { // left
        position.direction=3; document.querySelector('.comecocos').style="transform:rotateY(180deg)";
    }
});

let interval=setInterval(() => {
    // Escondemos el pacman
    document.querySelectorAll("#board>div")[(position.v*19)+position.h].classList.remove("comecocos");

    // Comprovamos si puede seguir moviendose en la misma direccion
    if (position.direction==0 && canUp()) { // up
        position.v=position.v-1;

    } else if (position.direction==1 && canRight()) { // right
        position.h=position.h+1;
        position.h = position.h==19 ? 0 : position.h;
    } else if (position.direction==2 && canDown()) { // down
        position.v=position.v+1;
    } else if (position.direction==3 && canLeft()) { // left
        position.h=position.h-1;
        position.h = position.h==-1 ? 18 : position.h;
    }
    console.log(position.h);

    // Movemos el pacman
    const dest=document.querySelectorAll("#board>div")[(position.v*19)+position.h];

    // Comprovamos si hay un cuadro de comida
    if (dest.classList.contains("sandia")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("sandia");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (dest.classList.contains("brocoli")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("brocoli");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }

    if (dest.classList.contains("jamon")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("jamon");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=++score;
        // Si no queda comida, finalizamos el juego

    }
        if (position.h==15 && position.v==0) {
         window.location.replace('juego1.html');
    }
        if (dest.classList.contains("chatarra")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("chatarra");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("perro")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("perro");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("helado")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("helado");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }
    if (dest.classList.contains("dona")) {
        // Eliminamos el cuadro de comida
        dest.classList.remove("dona");
        // Aumentamos la puntuacion
        document.getElementById("score").innerHTML=--score;

 
    }

    // Si la casilla tiene una vitamina
    if (dest.classList.contains("energizer")) {
        // Eliminamos la vitamina
        dest.classList.remove("energizer");
        // Convertimos los fantasmas en azules
        convertBlue();
    }
    dest.classList.add("comecocos");
}, speed);

/**
 * Funciones que determinan si pacman puede ir hacia arriba, derecha, abajo o izquierda
 * 
 * @return boolean
 */
const canUp = () =>    screenDraw[position.v-1][position.h]==1 || screenDraw[position.v-1][position.h]==9 || screenDraw[position.v-1][position.h]==4 || screenDraw[position.v-1][position.h]==5;
const canRight = () => screenDraw[position.v][position.h+1]==1 || screenDraw[position.v][position.h+1]==9 || position.h+1==19 || screenDraw[position.v-1][position.h]==4 || screenDraw[position.v-1][position.h]==5;
const canDown = () =>  screenDraw[position.v+1][position.h]==1 || screenDraw[position.v+1][position.h]==9 || screenDraw[position.v-1][position.h]==4 || screenDraw[position.v-1][position.h]==5;
const canLeft = () =>  screenDraw[position.v][position.h-1]==1 || screenDraw[position.v][position.h-1]==9 || position.h-1==-1 || screenDraw[position.v-1][position.h]==4 || screenDraw[position.v-1][position.h]==5;

