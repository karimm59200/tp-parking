import { Vehicule } from "./classes/Vehicules.js";

let listeVehicules=[];


// let vehicule = new Vehicule("bb-100-59")
//console.log(vehicule);

//obtenir un ticket

let btnTicket = document.getElementById('btnTicket');
// console.log(btnTicket)

//recupérer la plaque d'immatriculation


let plaqueImmat = document.getElementById("saisie"); 
btnTicket.addEventListener('click', (e) =>{
  // console.log("ticket impr")
  
  //  plaqueImmat= document.getElementById("saisie").value;
  let heureArrivee= new Date();
  console.log(plaqueImmat.value);
  console.log(heureArrivee)
  let vehicule1 = new Vehicule(plaqueImmat.value, heureArrivee);
  listeVehicules.push(vehicule1);
  console.table(listeVehicules);
  // let heureDepart=
})

let btnPayer= document.getElementById("btnPay");
btnPayer.addEventListener('click', () =>{
  listeVehicules;

let vehiculeFound = listeVehicules.find( function(Vehicule){
  if(){

    return Vehicule.plaqueImmat
  } else{
    return ` véhicule non présent.`
  }
})

  console.log(vehiculeFound);
})
