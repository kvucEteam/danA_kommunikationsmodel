$(document).ready(function (){

	//Resizing og repositionering af knapper og deres indhold på load af objekt
	$(window).load(function () {
		//gør font-size responsive
		var viewPort = $('#img-holder').width();
		var percentage = (viewPort / 1074) * 100;
		$('body').css('font-size', percentage+"%");
		//centrer btn tekster verticalt med responsiv padding
		tekstHeight = $('.tekst').height();
		btnHeight = $('.btn-default').height();
		console.log('btnHeight: '+btnHeight);
		btnPadding = (btnHeight - tekstHeight) / 2;
		$('.btn-default').css('padding-top', btnPadding);
	});
});

var tekster = {
	'situation'	:"<p>En hvilken som helst kommunikation finder sted under bestemte omstændigheder. Fx Dronningens nytårstale, som jo er en ganske bestemt situation med nogle helt faste forventninger til talens indhold og form. </p></br><p>En situation kan være eksamen, tv-reklamen eller hyggesamtalen på en café.</p>",
	'formaal'	:"<p>Afsenderen har et formål med at sende en meddelelse.</p></br><p>Det kan være at få unge til at drikke mindre hvis det er en alkoholkampagne, eller at blive bekræftet i at man er populær, klog, sjov eller andet, hvis det er en statusopdatering på Facebook.</p><br/><p>Det kan også bare være at få én til at lukke vinduet.</p>",
	'afsender'	:"<p>En afsender er den eller de personer der udtrykker sig med henblik på at kommunikere et eller andet til en eller flere modtagere. </p><br/><p>Det kan være et forsøg på at påvirke, at informere om noget eller blot for at underholde.</p>",
	'meddelelse':"<p>En meddelelse er i bred forstand den ytring en afsender sender til en modtager i form af (skrevne eller talte) ord, billeder, video mm.</p></br><p>Man kan også kalde det for kommunikationens budskab eller emne.",
	'medie'		:"<p>Mediet er den kanal teksten sendes i. Teksten kan sendes gennem “luften” (samtale), telefon, avis, tidsskrift, facebook mm.</p></br><p>Her vil man ofte være opmærksom på sprog og genre.</p>",
	'reaktion'	:"<p>Enhver kommunikation vil have som mål at udtrykke noget. Kommunikationen skal virke.</p></br><p>Enten får afsenderen meddelelsen igennem som modtageren så reagerer på, eller også bliver meddelelsen misforstået eller slet ikke opfattet, og virkningen udebliver. </p></br><p>Noget som kan stå i vejen for en vellykket kommunikation er 'Støj': I en kommunikationssituation kan der ofte være støj på linjen.</p></br><p>Det kan være helt konkret i en telefonsamtale fx, hvor der er udfald, baggrundstøj, knitren etc., men det kan også være på Facebook hvor reklamer forstyrrer kommunikationen.</p>",
	'adressat'	:"<p>En adressat er den eller de personer en meddelelse er bestemt for.</p>",
	'modtager'	:"<p>En modtager er den eller de personer der modtager en meddelelse fra en afsender. </p></br><p>Meddelelsen er ikke nødvendigvis bestemt for modtageren.</p>"
}

var overskrifter = {
	'situation' 	: 'Situation',
	'formaal' 		: 'Formål',
	'afsender' 		: 'Afsender',
	'meddelelse' 	: 'Meddelelse',
	'medie' 		: 'Medie',
	'reaktion' 		: 'Reaktion',
	'adressat' 		: 'Adressat',
	'modtager'		: 'Modtager'
}

//Klik og få vist tekst
$('.btn-default').click(function() {
	var elementId = $(this).attr('id');
	console.log(elementId);
	var msg = tekster[elementId];
	var header = overskrifter[elementId];
	MsgBox('body', msg, header);

});

//Msg box med selektor, tekst og header
function MsgBox(TargetSelector, UserMsg, Header) {
    var HTML = "<div class = 'MsgBox_bgr'><div id='UserMsgBox'>";
    HTML += '<span class="CloseClass right glyphicon glyphicon-remove"></span><span class="clear"></span>';
    HTML += '<h3>'+Header+'</h3>'
    HTML += UserMsg;
    HTML += "</div> </div>";
    $
    $(TargetSelector).prepend(HTML);

    $(".MsgBox_bgr").fadeIn("slow");

    $(".MsgBox_bgr").click(function() {
        $(".MsgBox_bgr").fadeOut(200, function() {
            $(this).remove();
        });
    });
}

//Resizing og repositionering af knapper og deres indhold på resize af objekt
$(window).resize(function() {
	//gør font-size responsive
	var viewPort = $('#img-holder').width();
	var percentage = (viewPort / 1074) * 100;
	$('body').css('font-size', percentage+"%");
	//centrer btn tekster verticalt med responsiv padding
	tekstHeight = $('.tekst').height();
	var btnHeight = $('.btn-default').height();
	btnHeight = $('.btn-default').height();
	btnPadding = (btnHeight - tekstHeight) / 2;
	console.log('btnPadding: '+btnPadding);
	$('.btn-default').css('padding-top', btnPadding);
});


$(document).ready(function() {


	$('.instr_container').html(instruction('Klik på knapperne og læs om kommunikationsmodellen. '));
});