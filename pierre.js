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


function cache()
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

jouer.click (function()
{
	jouer.hide();
	$("#joueur").show();
});

ok.click(function()
{
	prenom = $("#prenom").val();
	$("#joueur").hide();
	pierre.show();
	papier.show();
	ciseaux.show();
	affichage1.html(prenom);
	affichage2.show();
});



button.click(function votrechoix(event)
{
	photo1.hide();
	photo2.hide();
	photo3.hide();
	photo4.hide();
	photo5.hide();
	photo6.hide();
	choix = $(this).html();
	if (choix == 'PIERRE'){
		photo1.show();
	}
	else if (choix == 'PAPIER'){
		photo2.show();
	}
	else if (choix == 'CISEAUX'){
		photo3.show();
	}

	Choixordi();


});



function Choixordi()
{
ordi=Math.round(Math.random()*2)+1;
	if (ordi == 1) {
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

	compare();
}


function compare()
{
	if((choix=='PIERRE') && (pc=='CISEAUX') || (choix=='PAPIER') && (pc=='PIERRE') || (choix=='CISEAUX') && (pc=='PAPIER'))
	{
		gagne.show();
	}
	else if (choix == pc)
	{
		egalite.show();
	}else{
		perdu.show();
	}

}

gagne.click(function(){
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