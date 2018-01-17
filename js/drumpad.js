var padOne = new Audio('../sounds/60 guitar loop 095 Fmin.wav');

var padTwo = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0010.mp3');

var padThree = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/SD0000.mp3');

var padFour = new Audio('../sounds/18 guitar loop 088 Gmin.wav');

var padFive = new Audio('../sounds/Kick06 Drums1DOTcom.wav');

var padSix = new Audio('../sounds/JJ - C1.wav');

var padSeven = new Audio('../sounds/epiano-two-chords.wav');

var padEight = new Audio('../sounds/JJ - Kick1.wav');

var padNine = new Audio('../sounds/Snare22 Drums1DOTcom.wav');

function activePad() {
    var container = document.getElementById("title");
    var color = getRandomColor();
    container.style.backgroundColor = color;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        var container = document.getElementById("container-drum");
        var color = getRandomColor();
        container.style.backgroundColor = color;
        var elementNou = document.createElement("p");
        elementNou.className = "nod";
        var elementNod = document.createTextNode("NOD!");
        elementNou.appendChild(elementNod);
        var element = document.getElementById("container-drum");
        element.appendChild(elementNou);
    }
    if(e.keyCode == 88){
        var x = document.querySelectorAll(".nod");
        Array.prototype.forEach.call( x, function( node ) {
            node.parentNode.removeChild( node );
        });
    }
}
