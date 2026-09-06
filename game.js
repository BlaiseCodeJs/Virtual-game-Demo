//Variables
let x = 0
let y = 850

// Récupération des éléments 
const canvas = document.getElementById("gamecanva");
const ctx = canvas.getContext("2d");



//Fonctions

  //Sauvegarde de la Hauteur
function SaveHauteur() {
  localStorage.clear("hauteur")
  const valeur = hauteurinp.value
localStorage.setItem("hauteur", valeur);
}
let valeur = hauteurinp.value
let h = localStorage.getItem("hauteur")
 //Fonction de dessin
 function DrawSquare() {
   ctx.fillRect(x, y, 50, 50);
   //Choix de la couleur
   let blocColor = Math.floor(Math.random()*10)
  if (blocColor>7) {
    ctx.fillStyle = "green"
  } else {
    if (blocColor<3) {
      ctx.fillStyle = "SaddleBrown"
    } else {
      ctx.fillStyle ="DarkGray"
    }
  }
 }
 
function DrawWorld() {
  
//Remplissage X
  while (x<900) {
   DrawSquare()
    x = x + 50
    DrawSquare()
}

// Passe a la ligne suivante
  x = 0
  y = y - 50
}

//Création du joueur
function DrawPlayer() {
  
}


//Dessin du monde
while (y>h) {
  DrawWorld();
}
DrawPlayer();



