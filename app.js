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
