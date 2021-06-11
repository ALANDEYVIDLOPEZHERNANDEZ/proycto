$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#listita").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#listita").show(3000)
	});

	$("#ader").fadeOut(5000, function(){
		$("#ader").css({'top':300, 'left':200});
		$("#ader").fadeIn(5000);
	});

	$("#ader").fadeOut(5000, function(){
		$("#ader").css({'top':300, 'left':200});
		$("#ader").fadeIn(5000);
	});	
});