$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#listotas").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#listotas").show(3000)
	});

	$("#textd").fadeOut(5000, function(){
		$("#textd").css({'top':300, 'left':200});
		$("#textd").fadeIn(5000);
	});

	$("#textd").fadeOut(5000, function(){
		$("#textd").css({'top':300, 'left':200});
		$("#textd").fadeIn(5000);
	});	
});