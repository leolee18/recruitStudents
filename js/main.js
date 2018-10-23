
$('#logId').velocity('callout.pulse', { duration: 650});

$('#tit1Id').velocity('transition.slideDownBigIn', { duration: 1000,delay: 300 });
$('#tit2Id').velocity('transition.slideLeftBigIn', { duration: 1500,delay: 300 });
$('#tit3Id').velocity('transition.slideUpBigIn', { duration: 1000,delay: 500 });
$('#tit4Id').velocity('transition.slideRightBigIn', { duration: 700,delay: 1000 });

$('#anim1').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 100});
$('#anim2').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 200});
$('#anim3').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 300});
$('#anim4').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 400});
$('#anim6').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 600});
$('#anim7').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 700});
$('#anim8').velocity({opacity: 1,top:'-=50px'}, { duration: 600,delay: 800});


$(".xm-one").click(function(){
  scrollToEnd()
});
function scrollToEnd(){
    //var h = $(document).height()-$(window).height();
    //$(document).scrollTop(h); 
    $('#anim8').velocity("scroll", { duration: 750, offset: 300 });
}


$("#anim4").hover(function(){
	console.log('移入');
},function(){
	$('#anim42').velocity({backgroundColor: "#6638e8",color:"#c9caca"}, { duration: 600});
  $('#anim41').velocity({backgroundColor: "#fff",color:"#6638E8"}, { duration: 600});
});
$("#anim41").hover(function(){
  $('#anim41').velocity({backgroundColor: "#6638e8",color:"#c9caca"}, { duration: 600});
  $('#anim42').velocity({backgroundColor: "#fff",color:"#6638E8"}, { duration: 600});
},function(){
	console.log('移出');
});
$("#anim42").hover(function(){
  $('#anim42').velocity({backgroundColor: "#6638e8",color:"#c9caca"}, { duration: 600});
  $('#anim41').velocity({backgroundColor: "#fff",color:"#6638E8"}, { duration: 600});
},function(){
	console.log('移出');
});