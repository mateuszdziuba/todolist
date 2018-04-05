var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

getList();

button.addEventListener("click", clickFunction);
 
input.addEventListener("keypress", keypressFunction);
 
function getList(){
     var items = document.querySelectorAll("li");
     for(var i = 0; i < items.length; i++){
         items[i].addEventListener("click", toggleDone)
         addDeleteButton(items[i]);
      }
}
 
function toggleDone(){
     this.classList.toggle("done");
}
 
function addDeleteButton(li){
     var delBtn = document.createElement("button");
     delBtn.textContent = "X";
     li.appendChild(delBtn);
     delBtn.addEventListener("click", deleteItem);
}

function deleteItem(){
     this.parentNode.parentNode.removeChild(this.parentNode);
}
 
function clickFunction(){
     if(checkInputLength() > 0) {
         createListElement();
     }
}

function keypressFunction(event){
     if(checkInputLength() > 0 && event.keyCode === 13) {
         createListElement();
     }
}

function checkInputLength(){
     return input.value.length;
}

function createListElement(){
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));
     ul.appendChild(li);
     input.value = "";
     addDeleteButton(li); 
     li.addEventListener("click", toggleDone); 
}