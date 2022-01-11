const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-cicrcle-thin";
const LINE_THROUGH = "linethrough";

const options={weekday :"long", month : "short", day : "numeric"}
const today = new date ();
dateElement.innerHTML= today.tolocaledatestring ("en-US", options);

function addtodo(todo) {
    const item =`
    <i class="fa fa-circle-thin-co" job="complete" id="0"></i>
      <p class="text">${todo}</p>
      <i= class="fa fa-trash-o de" job="delete" id="0"></i>
    
    `;
    const position="beforeend";
    list.insertAdjacentElement(position, item)
}