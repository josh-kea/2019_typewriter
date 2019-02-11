"use strict";

const str = document.getElementById("typewriter").innerHTML;
const pos = 0;
const key1 = document.getElementById("typekey1");
const key2 = document.getElementById("typekey2");
const space = document.getElementById("typespace");

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
    const newSpace = space.cloneNode() // Cloning the sound, and then playing the clone in order to avoid sound cutting off
    newSpace.play();
}

function playKeySound(){
    const number = Math.random();
    console.log(number);

    if (number > 0.5) {
        const newKey1 = key1.cloneNode()
        newKey1.play();
    } else {
        const newKey2 = key2.cloneNode()
        newKey2.play();
    }
}

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", type);
