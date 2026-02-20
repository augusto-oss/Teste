
var width = 0;
var height = 0;
var life = 1;
var time = 10;
var createMosquitoTime = 1500;


var  level = window.location.search;
level = level.replace('?', '');

if( level === 'normal'){
    createMosquitoTime = 1500;
} else if (level === 'dificil'){
    createMosquitoTime = 1000;
} else if (level === 'chucknorris'){
    createMosquitoTime = 500;
}


function adjustSize() {

    width = window.innerWidth;
    height = window.innerHeight;
    var life = 1;

    console.log(width, height);
}

adjustSize();

var timer = setInterval(function(){
    time--

    if(time < 0){
        clearInterval(timer)
        clearInterval(createMosquito)
        window.location.href = 'vencedor.html';
        alert('VITÓRIA')
    } else {
    document.getElementById('cronometro').innerHTML = time 
     }
}, 1000);

function positionRandom() { 

    if(document.getElementById('mosquito')) { //True?
        document.getElementById('mosquito').remove();

        if(life > 3){
            window.location.href = 'endGame.html';

        } else {
            document.getElementById('v' + life).src = 'assets/img/coracao_vazio.png';
            life++
        }

    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;


    console.log(positionX, positionY);

    var mosquito = document.createElement('img');
    mosquito.src = 'assets/img/mosquito.png';
    mosquito.className = sizeRandom() + ' ' + sideRandom();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id ='mosquito';
    mosquito.onclick = function(){
        this.remove();
    } 


    document.body.appendChild(mosquito);
}

function sizeRandom() {
    var size = Math.floor(Math.random() * 3)
    console.log(size)


    switch (size) {
        case 0:
            return 'mosquitoOne'
        case 1:
            return 'mosquitoTwo'
        case 2:
            return 'mosquitoThree'
    }
}

sizeRandom();

function sideRandom() {
    var side = Math.floor(Math.random() * 2)

    switch (side) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}

sideRandom();
