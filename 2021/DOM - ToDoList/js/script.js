var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// Fonction qui va récupérer la valeur de l'input
function inputLength() {
    return input.value.length;

};

// Fonction qui va créer nos noeuds pour faire apparaître la liste de tâches
function createListElement() {
    var bloc = document.createElement("li")
    bloc.appendChild(document.createTextNode(input.value))
    ul.appendChild(bloc);




	// Fonction qui va gérér la nouvelle classe de la tâche sur laquelle on a cliqué
	function check() {
        bloc.classList.toggle("done")

	};
    
    

	// Ajout d'un évènement pour la fonction précédente
    bloc.addEventListener("click", check);

	// Fonction qui va gérér la nouvelle classe de la tâche pour la supprimer
	function deleteListItem() {
        
        bloc.classList.add("delete");

	};
    


	// Sélection du bouton html afin de lui ajouter la croix de suppression
    var button=document.createElement("button")
    button.appendChild(document.createTextNode("X"))
    bloc.appendChild(button);

	// Ajout d'un évènement qui permet la suppression

	button.addEventListener("click", deleteListItem);
};

// Fonction qui va ajouter la valeur de l'input s'il y a quelque chose
function addListAfterClick() {
if(inputLength()>0){
    createListElement();
   
   }
	
};

// Fonction qui va ajouter la valeur de l'input si on détecte la touche entrer
function addListAfterKeypress(event) {
	// On vérifie la détection de la touche entrée
	if(inputLength()>0&&event.which === 13){
    createListElement();
        }
};

// Ajout d'un évènement pour l'ajout de la tâche
enterButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress);
// Ajout d'un évènement pour l'ajout de la tâche à la touche entrer
