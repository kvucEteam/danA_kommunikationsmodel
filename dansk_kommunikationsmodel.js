// var situationTxt ="situation";
// var sprogTxt ="sprog";
// var afsenderTxt ="afsender";
// var samfundTxt ="samfund";
// var medieKanalTxt ="medie / kanal";
// var reaktionTxt ="reaktion";
// var adressatTxt ="adressat";
// var modtagerTxt ="modtager";
var obj = {
	'situation':'der står situation',
	'sprog':'sprog',
	'afsender':'afsender',
	'samfund':'samfund',
	'medieKanal':'medieKanal',
	'reaktion':'reaktion',
	'adressat':'adressat',
	'modtager':'modtager'
}

$(window).resize(function() {
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
});

$(window).load(function () {
	var viewPort = $('#img-holder').width();
	console.log(viewPort);
	var percentage = (viewPort / 1074) * 100;
	console.log(percentage);
	$('body').css('font-size', percentage+"%");
});

$('.btn-default').click(function() {
	var elementId = $(this).attr('id');
	console.log(elementId);
	var msg = obj[elementId];
	MsgBox('body', msg);

});

function MsgBox(TargetSelector, UserMsg) {

    var HTML = "<div class = 'MsgBox_bgr'><div id='UserMsgBox'>";
    HTML += '<span class="CloseClass right glyphicon glyphicon-remove"></span><span class="clear"></span>';
    // HTML += '<h2>'+header+'</h2>'
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