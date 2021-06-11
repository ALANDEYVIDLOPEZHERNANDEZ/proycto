$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#benito").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#benito").show(3000)
	});

	$("#benita").fadeOut(5000, function(){
		$("#benita").css({'top':300, 'left':200});
		$("#benita").fadeIn(5000);
	});

	$("#benita").fadeOut(5000, function(){
		$("#benita").css({'top':300, 'left':200});
		$("#benita").fadeIn(5000);
	});	
});