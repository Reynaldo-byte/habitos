/**
 * Script para pintar el tablero
 */

'use strict'
const screenDraw=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],
    [0,1,1,1,1,1,1,4,1,0,1,1,1,1,1,1,1,1,0],
    [0,4,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,4,0],
    [0,1,1,1,1,4,4,4,0,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0],
    [0,4,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,0,0,0,1,0,0,0,1,0,1,0,0,0,4,0,0,0,0],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,2,2,2,0,1,0,1,0,0,0,0],
    [0,1,1,1,4,1,1,0,3,3,3,0,1,1,1,1,1,1,0],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0],
    [0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0],
    [0,4,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,9,0],
    [0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0],
    [0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0],
    [0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0],
    [0,4,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0],
    [0,1,4,1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const board=document.querySelector("#board");

createBoard();
function createBoard() {
    let j=Math.floor(Math.random()*3)
    // dibujamos el tablero
    screenDraw.map(line => {
        line.map((el, i) => {
            const div=document.createElement("div");
            if (i==0) {
                div.classList.add("newLine");
            }
            if (el==0) {
                div.classList.add("wall");
            } else if (el==2) {
                div.classList.add("door");
            } else if (el==1) {
                j=Math.floor(Math.random()*3)
                if(j==0){
                div.classList.add("sandia");
                }
                else if(j==1){
                     div.classList.add("jamon");
                }
                    else if(j==2){
                         div.classList.add("brocoli");
                    }
               
            } else if (el==9) {
                div.classList.add("energizer")
            }else if(el==4){
                    j=Math.floor(Math.random()*4)
                if(j==0){
                div.classList.add("chatarra");
                }
                else if(j==1){
                     div.classList.add("perro");
                }
                    else if(j==2){
                         div.classList.add("helado");
                    }
                    else if(j==3){
                         div.classList.add("dona");
                    }
            }
            else if(el==5){
                div.classList.add("casa")
            }
            board.appendChild(div);
        });
    });
}
