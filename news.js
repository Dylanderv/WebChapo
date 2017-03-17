
var recherches=[];//tableau contenant des chaines de caracteres correspondant aux recherches stockees
var recherche_courante;// chaine de caracteres correspondant a la recherche courante
var recherche_courante_news=[]; // tableau d'objets de type resultats (avec titre, date et url)

function ajouter_recherche()
{
	if(recherches.indexOf($("#zone_saisie").val()) == -1){
		recherches.push($("#zone_saisie").val());
		$("#recherches-stockees").append
		("<p class=\"titre-recherche\"><label>"+$("#zone_saisie").val()+"</label><img src=\"croix30.jpg\" class=\"icone-croix\"/> </p>");
		$("#recherches-stockees").last().find("label").attr("onclick","selectionner_recherche(this)");
		$("#recherches-stockees").last().find("img").attr("onclick","supprimer_recherche(this)");
		var rechercheJSON=JSON.stringify(recherches);
		$.cookie("recherches",recherches,{ expires : 1000 });
	}
}



function supprimer_recherche(e){

	parent = e.parent();
	parent.remove();
	pos = recherches.indexOf(e.text());
	recherches.split(pos, 1);
	var rechercheJSON=JSON.stringify(recherches);
	$.cookie("recherches",recherches,{ expires : 1000 });

}


function selectionner_recherche(e){
<<<<<<< HEAD
	recherche_courante = e.text();
	zone_recherche = $("#zone_saisie").text(recherche_courante);
=======
	recherche_courante = $(e).html();
 zone_recherche = $("#zone_saisie");
 zone_recherche.val(recherche_courante);
>>>>>>> 8ca6d6076aab795a30256517276b7d2b15dc1d73
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
