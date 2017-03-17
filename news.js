var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{

}

function supprimer_recherche(e){
	e.parent().remove();
}


function selectionner_recherche(e){
	label = e.text();
	zone_recherche = $(#zone_saisie).text(label);
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
