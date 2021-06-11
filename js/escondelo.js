$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#one").hide(2300);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#one").show(3000)
	});
});