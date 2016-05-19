intialHP = 50;
function setCPU() {
};
setCPU();
/* users moves */
function waterCannon() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('apHP').innerHTML = '76';
    document.getElementById('message').innerHTML = " It was super effect! "

  }
  compPokemon();
}

function waterPulse() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('apHP').innerHTML = '56';
    document.getElementById('message').innerHTML = " It was super effect! "

  }
  compPokemon();
}

function surf() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('apHP').innerHTML = '35';
    document.getElementById('message').innerHTML = " It was super effect! "

  }
  compPokemon();
}
function Bite() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('apHP').innerHTML = '21';
    document.getElementById('message').innerHTML = " It was super effect! "

  }
  compPokemon();
}



/* opponent's moves */

function flameThrower() {
  //alert("Water Cannon!");
  document.getElementById('myHP').innerHTML = '35';
}

function dragonClaw() {
  document.getElementById('myHP').innerHTML = '21';
}

function ember() {
  document.getElementById('myHP').innerHTML = '96';

}

function growl() {
  document.getElementById('myHP').innerHTML = '56';

}


function compPokemon() {
  var move = Math.floor((Math.random() * 4) + 1);
  if(move === 1){
    flameThrower();
  } else if(move === 2) {
    ember();
  } else if(move === 3) {
    dragonClaw();
  } else {
    growl();
  }
}
