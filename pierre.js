var vous;
var ordi;
var jouer =$("#jouer");
var pierre =$("#pierre");
var papier =$("#papier");
var ciseaux =$("#ciseaux");
var start = cache();
var button =$(".choix");
var choix ;
var pc;
var ok = $("#ok");
var prenom = $('#prenom');
var affichage1 = $("#affichage1");



function cache(){
pierre.hide();
papier.hide();
ciseaux.hide();
$("#joueur").hide();
}

jouer.click (function()
{
jouer.hide();
$("#joueur").show();
});

ok.click(function(){
	prenom = $("#prenom").val();
	//.html;
	$("#joueur").hide();
	pierre.show();
	papier.show();
	ciseaux.show();
	affichage1.html(prenom);
});



button.click(function votrechoix(event){
	choix = $(this).html();
	Choixordi();
});



function Choixordi()
{
ordi=Math.round(Math.random()*2)+1;
	if (ordi == 1) {
		pc = 'PIERRE';
	}
	else if (ordi == 2) {
		pc = 'PAPIER';
	}
	else if (ordi == 3) {
		pc = 'CISEAUX';
	}
	compare();
}


function compare(){
if((choix=='PIERRE') && (pc=='CISEAUX') || (choix=='PAPIER') && (pc=='PIERRE') || (choix=='CISEAUX') && (pc=='PAPIER')){

		alert(  pc  +   "\nVOUS AVEZ GAGNE!!!");

}
else{
	alert(  pc +   "\nVOUS AVEZ PERDU!!!");
}
}
