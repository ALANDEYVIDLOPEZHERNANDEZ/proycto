$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#texto").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#texto").show(3000)
	});
});