// Variables globales et sélections des éléments
let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

// Récupération de la valeur de ce qui est écrit dans l'input
function inputLength() {
	return input.value.length;
};

// Création des listes d'éléments et de la suppression
function createListElement() {

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// input.value = "";

	function check() {
		li.classList.toggle("done");
	};

	li.addEventListener("click", check);

	function deleteListItem() {
		li.classList.add("delete");
	};
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

};

// Ajouter les éléments dans la liste au clic
function addListAfterClick() {

	if (inputLength() > 0) {
		createListElement();
	};
};

// Ajouter des éléments dans la liste en appuyant sur la touche entrer du clavier
function addListAfterKeypress(event) {
	//  vérification détection de la touche entrer
	if (inputLength() > 0 && event.which === 13) {
		createListElement();
	};
};

// Gestionnaire d'évènements au click et à l'appui de la touche sur le clavier
enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);