$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#listita").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("").show(3000)
	});

	$("#head").fadeOut(5000, function(){
		$("#head").css({'top':300, 'left':200});
		$("#head").fadeIn(5000);
	});

	$("#head").fadeOut(5000, function(){
		$("#head").css({'top':300, 'left':200});
		$("#head").fadeIn(5000);
	});	
});