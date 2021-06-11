$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#listota").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#listota").show(3000)
	});

	$("#juas").fadeOut(5000, function(){
		$("#juas").css({'top':300, 'left':200});
		$("#juas").fadeIn(5000);
	});

	$("#listota").fadeOut(5000, function(){
		$("#listota").css({'top':300, 'left':200});
		$("#listota").fadeIn(5000);
	});	
});