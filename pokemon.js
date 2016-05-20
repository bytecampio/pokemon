var userHP = 100;
var opHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
/* users moves */
function waterCannon() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! ";
  }
  else {
    opHP = opHP - 30;
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    document.getElementById('message').innerHTML = " It was super effective! "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
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
    opHP = opHP - 10;
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    document.getElementById('message').innerHTML = " It was super effective! "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
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
    opHP = opHP - 20;
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    document.getElementById('message').innerHTML = " It was super effective! "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  compPokemon();
}
function tackle() {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    opHP = opHP - 5;
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    document.getElementById('message').innerHTML = " It was super effective! "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  compPokemon();
}



/* opponent's moves */

function flameThrower() {
  //alert("Water Cannon!");
  userHP = userHP - 30;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  document.getElementById('message').innerHTML = " Blastoise took a major hit! "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Charizard fainted! "
  }
}

function dragonClaw() {
  userHP = userHP - 20;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  document.getElementById('message').innerHTML = " That was super effective! "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Charizard fainted! "
  }
}

function ember() {
  userHP = userHP - 10;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  document.getElementById('message').innerHTML = " Direct Hit! "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Charizard fainted! "
  }
}

function growl() {
  userHP = userHP - 5;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  document.getElementById('message').innerHTML = " That was a light hit... "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Charizard fainted! "
  }
}


function compPokemon() {
  var move = Math.floor((Math.random() * 4) + 1);
    opAttacks[move]();
}
