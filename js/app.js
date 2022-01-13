const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("item");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-cicrcle-thin";
const LINE_THROUGH = "linethrough";

let.list, id;

let data = localStorage.getItem("TODO");

if (data){
LIST = JSON.parse(data);
id = LIST.length;
loadList(LIST);
}else{
LIST = [];
id = 0;
}

function loadList(array){
  array.forEach(function(item) {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(todo, id, done, trash) {
  
  if(trash){return;}

  const DONE= done ? CHECK : UNCHECK;
const LINE = done ? LINE_THROUGH: "";

  const item = `<li class="item">
    <i class="fa fa ${DONE} co" job="complete" id=${id}></i>
      <p class="text ${LINE}">${todo}</p>
      <i class="fa fa-trash-o de" job="delete" id=${id}></i>
    </li>
    `;

  // Create an HTML Object with
  var htmlObject = document.createElement("div");
  htmlObject.innerHTML = item;
  const position = "beforeend";
  list.insertAdjacentElement(position, htmlObject);
}

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
    }
    LIST.push({name : toDo, 
    id : id,
    done : false,
    trash : false,
  });

  let list,id;("TODO",JSON.stringify(LIST));

  id++;

    input.value = "";
  }
});

function completeToDo(element){
  element.classlist.toggle(CHECK);
  element.classlist.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classlist.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
}

function removeToDo(element){element.parentNode.parentNode.removechild(element.parentnode);
  LIST[element.id].trash = true;
}

let list,id;("TODO",JSON.stringify(LIST));

list.addEventListener("click", function(even){

const element = EventTarget;
const elementJob = element.attributes.job.value;

if(elementJob == "complete"){
completeToDo(element);
}else if(elementJob == "remove"){
removeToDo(element);
}

})
