var vous;
var ordi;
var jouer =$("#jouer");
var pierre =$("#pierre");
var papier =$("#papier");
var ciseaux =$("#ciseaux");
var button =$(".choix");
var choix ;
var pc;
var ok = $("#ok");
var prenom = $('#prenom');
var affichage1 = $("#affichage1");
var affichage2 = $("#affichage2");
var photo1 = $("#photo1");
var photo2 = $("#photo2");
var photo3 = $("#photo3");
var photo4 = $('#photo4');
var photo5 = $('#photo5');
var photo6 = $('#photo6');
var resultat = $("#resultat");
var photoaff1 = $('#photoaff1');
var photoaff2 = $('#photoaff2');
var gagne = $("#gagne");
var perdu = $("#perdu");
var egalite = $('#egalite');
var start = cache();


function cache() //elle nous sert a caché toute les differentes "div" du html sauf la div "jouer".
{
	pierre.hide();
	papier.hide();
	ciseaux.hide();
	$("#joueur").hide();
	affichage2.hide();
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
	gagne.hide();
	perdu.hide();
	egalite.hide();
}

jouer.click (function() //cest les actions qui se realisent au clic du bouton "jouer"
{
	jouer.hide();       // hide c'est pour faire disparaitre les elements
	$("#joueur").show();// show  c'est pour faire apparaitre les elements
});

ok.click(function()   //".click"  permet de definir les actions au moment du clic.
{
	prenom = $("#prenom").val(); // ".val" permet de stocker l'element validé. 
	$("#joueur").hide();
	pierre.show();
	papier.show();
	ciseaux.show();
	affichage1.html(prenom); // ca affiche la varible selectionnée dans la page html.
	affichage2.show();
});



button.click(function votrechoix(event) //Attacher une fonction de gestionnaire d'événements pour un ou plusieurs événements aux éléments sélectionnés.
{                                       // fonction pour le joueur.
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
	choix = $(this).html(); // "this" met en action le "event".
	if (choix == 'PIERRE'){ // affichage photo correspondant au choix du joueur.
		photo1.show();
	}
	else if (choix == 'PAPIER'){
		photo2.show();
	}
	else if (choix == 'CISEAUX'){
		photo3.show();
	}

	Choixordi(); //au click ca execute la fonction " choixordi".


});



function Choixordi()
{
ordi=Math.round(Math.random()*2)+1; // choix aleatoire de l'ordi.
	if (ordi == 1) {				//affichage des photos correspondantes au choix.
		pc = 'PIERRE';
		photo4.show();

	}
	else if (ordi == 2) {
		pc = 'PAPIER';
		photo5.show();
	}
	else if (ordi == 3) {
		pc = 'CISEAUX';
		photo6.show();
	}

	compare(); // elle execute la fonction "compare" ci dessous
}


function compare()
{
	if((choix=='PIERRE') && (pc=='CISEAUX') || (choix=='PAPIER') && (pc=='PIERRE') || (choix=='CISEAUX') && (pc=='PAPIER'))
	{
		gagne.show(); // affichage des differents bouton de la div resulats
	}
	else if (choix == pc)
	{
		egalite.show();
	}else{
		perdu.show();
	}

}

gagne.click(function(){ // fonction pour cacher les images et remettre le jeu a zero.
	gagne.hide();
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
});
perdu.click(function(){
	perdu.hide();
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
});

egalite.click(function(){
	egalite.hide();
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
})