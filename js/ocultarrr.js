$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultarr").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultarr").show(3000)
	});

	$("#ulti").fadeOut(5000, function(){
		$("#ulti").css({'top':300, 'left':200});
		$("#ulti").fadeIn(5000);
	});

	$("#ocultarr").fadeOut(5000, function(){
		$("#ocultarr").css({'top':300, 'left':200});
		$("#ocultarr").fadeIn(5000);
	});	
});