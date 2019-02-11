"use strict";

var str = document.getElementById("typewriter").innerHTML;
var pos = 0;
var speed = 200;
var key1 = document.getElementById("typekey1");
var key2 = document.getElementById("typekey2");
var space = document.getElementById("typespace");

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
    var number = Math.random();
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
