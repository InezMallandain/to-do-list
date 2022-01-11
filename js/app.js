const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("item");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-cicrcle-thin";
const LINE_THROUGH = "linethrough";

const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(todo) {
  const item = `<li class="item">
    <i class="fa fa-circle-thin-co" job="complete" id="0"></i>
      <p class="text">${todo}</p>
      <i class="fa fa-trash-o de" job="delete" id="0"></i>
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
      addToDo(toDo);
    }
  }
});
