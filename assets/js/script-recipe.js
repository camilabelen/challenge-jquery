$(document).ready(function() {
  
  //imprimir mensaje en la consola
  console.log("ready");

 //esconder icono de menu
  $('.js-menu').hide();

  //Función para agregar o eliminar clase para botones Make it o Recipe
  change();

  //Función para redireccionar a index.html
  back();
});

function change() {
  $('.js-show-recipe').click(function () {
    $('.recipe').removeClass('make');
    $(this).addClass('active');
    $('.js-show-make').removeClass('active');
  })
  $('.js-show-make').click(function () {
    $('.recipe').addClass('make');
    $(this).addClass('active');
    $('.js-show-recipe').removeClass('active');
  });  
};

$('.js-back').click(function back() {
  $(this).attr('href', 'index.html');
});
