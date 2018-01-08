$(document).ready(function () {

  //imprimir mensaje en la consola
  console.log("ready");

  //esconder icono de menu
	$('.js-menu').hide();
});

  //Función para la pestaña de 'recetas'
  $('.​js-show-recipe').click(function () {
    $('.recipe').removeClass('make');
  });

  //Función para la pestaña de 'hacer'
  $('.​js-show-make').click(function () {
    $('.recipe').addClass('make');
  });



