"use strict";

let str = document.getElementById("typewriter").innerHTML;
let pos = 0;
let key1 = document.getElementById("typekey1");
let key2 = document.getElementById("typekey2");
let space = document.getElementById("typespace");

console.log(str);

document.getElementById("typewriter").innerHTML = "";

function type(){
    if (pos < str.length){
        document.getElementById("typewriter").innerHTML += str.charAt(pos);
        pos++;
        setTimeout(type, getRandomSpeed());

        if (str.charAt(pos-1) === " "){
            playSpaceSound();
        } else {
            playKeySound();
        }
    }
}

function getRandomSpeed(){
    return Math.floor(Math.random() * 270) + 70;
}

function getRandomSound(){
    return Math.random();
}

function playSpaceSound(){ 
    let newSpace = space.cloneNode() // Cloning the sound, and then playing the clone in order to avoid sound cutting off
    newSpace.play();
}

function playKeySound(){
    let number = Math.random();
    console.log(number);

    if (number > 0.5) {
        let newKey1 = key1.cloneNode()
        newKey1.play();
    } else {
        let newKey2 = key2.cloneNode()
        newKey2.play();
    }
}

let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", type);
