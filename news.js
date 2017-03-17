var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
	if(recherches.indexOf($("#zone_saisie").val()) == -1){
		recherches.push($("#zone_saisie").val());
		$("#recherches-stockees").append
		("<p class=\"titre-recherche\"><label>"+$("#zone_saisie").val()+"</label><img src=\"croix30.jpg\" class=\"icone-croix\"/> </p>");
		$("#recherches-stockees:last-child:first-child").attr("onclick","selectionner_recherche(this)");
		$("#recherches-stockees:last-child:last-child").attr("onclick","supprimer_recherche(this)");
	}
}

function supprimer_recherche(e){
	parent = e.parent();
	parent.remove();
	pos = recherches.indexOf(e.text());
	recherches.split(pos, 1);
}


function selectionner_recherche(e){
	recherche_courante = e.text();
	zone_recherche = $(#zone_saisie).text(recherche_courante);
}


function init()
{

}


function recherche_nouvelles()
{


}


function maj_resultats(res)
{


}


function sauve_news(e)
{

}


function supprime_news(e)
{

}
