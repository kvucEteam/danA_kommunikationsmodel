var tekster = {
	'situation'	:'En hvilken som helst kommunikation finder sted under bestemte omstændigheder: <br><br> <ul><li>Geografisk sted: (kontinent, land, by).</li><li>Fysisk miljø (koldt/varmt, inde/ude, hav, skov, bjerge osv.)</li><li>Socialt miljø (socialt lag, klasse, kulturelt miljø, social gruppe, etnisk gruppe) osv.</li><li>tid</li></ul>Disse omstændigheder kan være meget afgørende for om argumentationen lykkes <br>OBS husk at beskrive at ALLE elementer er forbundne',
	'sprog'		:'sprog',
	'afsender'	:'En afsender er den eller de personer der udtrykker sig med henblik på at påvirke andre',
	'samfund'	:'samfund',
	'medieKanal':'Mediet er den kanal teksten sendes i. Teksten kan sendes gennem “luften” (samtale), telefon, avis, tidsskrift, facebook mm.',
	'reaktion'	:'reaktion',
	'adressat'	:'En adressat er den eller de personer en meddelelse er bestemt for',
	'modtager'	:'En modtager er den eller de personer der modtager en meddelelse fra en afsender. Meddelelsen er ikke nødvendigvis bestemt for modtageren'
}

var overskrifter = {
	'situation' 	: 'Situation',
	'sprog' 		: 'Sprog',
	'afsender' 		: 'Afsender',
	'samfund' 		: 'Samfund',
	'medieKanal' 	: 'Medie / Kanal',
	'reaktion' 		: 'Reaktion',
	'adressat' 		: 'Adressat',
	'modtager'		: 'Modtager'
}
//Resizing og repositionering af knapper og deres indhold
$(window).resize(function() {
	//gør font-size responsive
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
	//centrer btn tekster verticalt med responsiv padding
	tekstHeight = $('.tekst').height();
	var btnHeight = $('.btn-default').height();
	btnHeight = $('.btn-default').height();
	btnPadding = (btnHeight - tekstHeight) / 2;
	console.log('btnPadding: '+btnPadding);
	$('.btn-default').css('padding-top', btnPadding);
});

//Resizing og repositionering af knapper og deres indhold
$(window).load(function () {
	//gør font-size responsive
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
	//centrer btn tekster verticalt med responsiv padding
	tekstHeight = $('.tekst').height();
	btnHeight = $('.btn-default').height();
	console.log('btnHeight: '+btnHeight);
	btnPadding = (btnHeight - tekstHeight) / 2;
	$('.btn-default').css('padding-top', btnPadding);
});
//Klik og få vist tekst
$('.btn-default').click(function() {
	var elementId = $(this).attr('id');
	console.log(elementId);
	var msg = tekster[elementId];
	var header = overskrifter[elementId];
	MsgBox('body', msg, header);

});

//Msg box med selektor, tekst og header
function MsgBox(TargetSelector, UserMsg, header) {
    var HTML = "<div class = 'MsgBox_bgr'><div id='UserMsgBox'>";
    HTML += '<span class="CloseClass right glyphicon glyphicon-remove"></span><span class="clear"></span>';
    HTML += '<h2>'+header+'</h2>'
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