$(document).ready( function () {
	$('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();
	renderActivities(activitiesArray);
});

//Función para agregar texto nuevas recetas
function printNews () {
	$("#newRecipes").html('NUEVAS RECETAS');
};

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

var recipe = [];
function renderHighlightedRecipes (recipesArray) {
	
	for(var i = 0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted === true){
			recipe.push(recipesArray[i]);			
		}
	}
	renderRecipe(recipe);
	console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

function renderRecipe (recipe) {
	for(var i = 0; i < recipe.length; i++){
		$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution">'
     + '<span class="title-recipe">' + recipe[i].title + '</span>' + '<span class="metadata-recipe">'
     + '<span class="author-recipe">' + recipe[i].source.name + '</span>' + '<span class="bookmarks-recipe">'
     + '<span class="icon-bookmark">' + '</span>' + '</span>' + '</span>' + '</span>' 
     + '<img src="assets/img/recipes/320x350/' + recipe[i].name + '.jpg"</a>' );
 	}
 	console.log('Voy a pintar la receta: ', recipe[i]);
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities (activitiesArray) {
	
	for(var i = 0; i < activitiesArray.length; i++){
		renderActivity (activitiesArray[i]);
		if(activitiesArray.length > 0){
			$('.wrapper-message').hide();
		}
	}
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity (activitiesList) {
	$(".list-activities").append(`<a href="#" class="item-activity"><span class="attribution"><span class="avatar">
    <img src="`+ activitiesList.userAvatar + `" class="image-avatar"></span><span class="meta">
    <span class="author">`+ activitiesList.userName + `</span> made <span class="recipe">`+ activitiesList.recipeName +
    `</span>: `+ activitiesList.text + `<span class="location">&mdash;`+ activitiesList.place + `</span>
    </span></span> <div class="bg-image" style="background-image: url('assets/`+ activitiesList.image +
    `'"></div></a>`);
}


