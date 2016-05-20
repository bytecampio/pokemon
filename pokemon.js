var userHP = 100;
var opHP = 100;
opAttacks = [flameThrower, dragonClaw, ember, growl];
playerMove = 0;
/* users moves */
function waterCannon() {
  if(playerMove === 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! ";
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used water cannon ";
    opHP = opHP - 30;
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charizard1 "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}

function waterPulse() {
  if(playerMove === 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used water pulse ";
    opHP = opHP - 10;
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charizard2 "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}

function surf() {
  if(playerMove === 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used surf ";
    opHP = opHP - 20;
    if(opHP < 0 ) { opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
    //document.getElementById('message').innerHTML = " Charizard3 "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}
function tackle() {
  if(playerMove === 0 && userHP != 0) {
  //alert("Water Cannon!");
  var miss = Math.floor((Math.random() * 5) + 1);
  if(miss === 1 || miss === 2) {
    document.getElementById('message').innerHTML = " Blastoise's attack missed! "
  }
  else {
    document.getElementById('message').innerHTML = " Blastoise used tackle ";
    opHP = opHP - 5;
    if(opHP < 0){ opHP = 0}
    document.getElementById('apHP').innerHTML = opHP;
  //document.getElementById('message').innerHTML = " Charizard4 "
    if(opHP === 0){
      document.getElementById('message').innerHTML = " Charizard fainted! "
    }
  }
  //wait();
  playerMove = 1;
}
}



/* opponent's moves */

function flameThrower() {
  document.getElementById('message').innerHTML = " Charizard used flame thrower "
  userHP = userHP - 30;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  //document.getElementById('message').innerHTML = " Blastoise1 "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Blastoise fainted! "
  }
}

function dragonClaw() {
  document.getElementById('message').innerHTML = " Charizard used dragon claw "
  userHP = userHP - 20;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  //document.getElementById('message').innerHTML = " Blastoise2 "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Blastoise fainted! "
  }
}

function ember() {
  document.getElementById('message').innerHTML = " Charizard used ember "
  userHP = userHP - 10;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  //document.getElementById('message').innerHTML = "Blastoise3 "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Blastoise fainted! "
  }
}

function growl() {
  document.getElementById('message').innerHTML = " Charizard used growl "
  userHP = userHP - 5;
  if(userHP < 0) { userHP = 0}
  document.getElementById('myHP').innerHTML = userHP;
  //document.getElementById('message').innerHTML = " Blastoise4 "
  if(userHP === 0){
    document.getElementById('message').innerHTML = " Blastoise fainted! "
  }
}



function compPokemon() {
  if(playerMove == 1 && opHP != 0) {
  var move = Math.floor((Math.random() * 4) + 1);
    opAttacks[move]();
    playerMove = 0;
  }
}
