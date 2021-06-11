$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#listita").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#listita").show(3000)
	});

	$("#texto").fadeOut(5000, function(){
		$("#texto").css({'top':300, 'left':200});
		$("#texto").fadeIn(5000);
	});

	$("#texto").fadeOut(5000, function(){
		$("#texto").css({'top':300, 'left':200});
		$("#texto").fadeIn(5000);
	});	
});