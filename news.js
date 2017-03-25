
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

	parent = $(e).parent();
	pos = recherches.indexOf($(e).html());
	recherches.splice(pos, 1);
  parent.remove();
	var rechercheJSON=JSON.stringify(recherches);
	$.cookie("recherches",recherches,{ expires : 1000 });

}


function selectionner_recherche(e){
	recherche_courante = $(e).html();
 	var zone_recherche = $("#zone_saisie");
 	zone_recherche.val(recherche_courante);
	$("#resultats").empty();
	var tab=$.cookie($(e).text());
	if(tab != undefined){
		var resJSON = JSON.parse(tab);
		for(var i = 0; i < resJSON.length; i++){
			$("#resultats").append("<p class=\"titre_result\"><a class=\"titre_news\" href=\""+ resJSON[i].url +"\" target=\"_blank\"> "+resJSON[i].titre +" </a><span class=\"date_news\">"+resJSON[i].date +"</span><span class=\"action_news\" onclick=\"sauve_news(this)\"><img src=\"disk15.jpg\"/></span></p>");
		}
	}
}

function init(){
  var mdr = $.cookie('recherches');
  if(mdr != undefined){
    recherches = mdr.split(",");
		for(var i = 0; i < recherches.length; i++){
      $("#recherches-stockees").append
	      ("<p class=\"titre-recherche\"><label>"+recherches[i]+"</label><img src=\"croix30.jpg\" class=\"icone-croix\"/> </p>");
      $("#recherches-stockees").last().find("label").attr("onclick","selectionner_recherche(this)");
      $("#recherches-stockees").last().find("img").attr("onclick","supprimer_recherche(this)");
		}

  }

}



function recherche_nouvelles()
{
	//$("#resultats").empty();
	$("#wait").css("display","block");
	var data = $("#zone_saisie").val();
	recherche_courante = data;
	$.get("search.php?data="+data,maj_resultats);

}


function maj_resultats(res)
{
	$("#wait").css("display", "none");
	var resJSON = JSON.parse(res);
	var currRes = $("#resultats").children();
	$("#resultats").empty();
	var tab = $.cookie(recherche_courante);
	console.log(tab);
	if(tab != undefined){
		var cookieParsed = JSON.parse(tab);
		for(var j = 0; j < cookieParsed.length; j++){
			for(var i = 0; i < resJSON.length; i++){
				if(cookieParsed[j].titre.trim() == decodeEntities(resJSON[i].titre).trim()){
					$("#resultats").append("<p class=\"titre_result\"><a class=\"titre_news\" href=\""+ cookieParsed[j].url +"\" target=\"_blank\"> "+cookieParsed[j].titre +" </a><span class=\"date_news\">"+cookieParsed[j].date +"</span><span class=\"action_news\" onclick=\"sauve_news(this)\"><img src=\"disk15.jpg\"/></span></p>");
					resJSON.splice(i,1);
				}
			}
		}
	}
	for(var i = 0; i < resJSON.length; i++){
		$("#resultats").append("<p class=\"titre_result\"><a class=\"titre_news\" href=\""+ resJSON[i].url +"\" target=\"_blank\"> "+resJSON[i].titre +" </a><span class=\"date_news\">"+resJSON[i].date +"</span><span class=\"action_news\" onclick=\"sauve_news(this)\"><img src=\"horloge15.jpg\"/></span></p>");
	}
}


function sauve_news(e)
{
	$(e).find('img').attr('src','disk15.jpg');
	$(e).attr('onclick','supprime_news(this)');
	var date_=$(e).prev().html();
	var url_=$(e).prev().prev().attr("href");
	var titre_=$(e).prev().prev().html();
	var objetAdd = {titre : titre_, date : date_, url: url_};
	if(indexOf(recherche_courante_news, objetAdd) == -1){
		recherche_courante_news.push(objetAdd);
	}
	var rechercheJSON=JSON.stringify(recherche_courante_news);
	$.cookie(recherche_courante,rechercheJSON,{ expires : 1000 });
}


function supprime_news(e)
{
	$(e).find('img').attr('src', 'horloge15.jpg');
	$(e).attr('onclick','sauve_news(this)');
	var date_=$(e).prev().html();
	var url_=$(e).prev().prev().attr("href");
	var titre_=$(e).prev().prev().html();
	var objDel = {titre : titre_, date : date_, url: url_};
	var indexDel = indexOf(recherche_courante_news, objDel);
	if(indexDel >= 0){
		recherche_courante_news.splice(indexDel - 1, 1);
	}
	var rechercheJSON=JSON.stringify(recherche_courante_news);
	$.cookie(recherche_courante,rechercheJSON,{ expires : 1000 });
}
