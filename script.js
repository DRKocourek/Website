let logo = "github";
let picture = "";
var firstnum = "";
var secondnum = "";
const el = document.querySelector("img");
const pic = document.getElementById("picture");
const elem = document.getElementsByClassName("screen");
var operator = 0;
let operatorsave = 0;
let randomnum1 = "";
let randomnum2 = "";
const randomel = document.getElementById("randomp");
function show(){
    const element=document.getElementById("text");
    element.innerHTML = "Meow"
}
function print(){
    const parelement = document.querySelector("p");
    let print = document.getElementById("text").value;
    parelement.innerHTML = print;
}
function next() {

  if (logo === "github") {
    el.src="img/github.svg";
    logo = "youtube";
  }
  else if (logo === "youtube") {
      el.src="img/youtube.svg";
      logo = "instagram"
  }
  else if (logo === "instagram") {
      el.src="img/instagram.png";
      logo = "tiktok"
  }
  else if (logo === "tiktok") {
      el.src="img/tiktok.png";
      logo = "github"
  }
}
function prev() {
  if (logo === "github") {
    el.src="img/github.svg";
    logo = "tiktok";
  }
  else if (logo === "youtube") {
      el.src="img/youtube.svg";
      logo = "github"
  }
  else if (logo === "instagram") {
      el.src="img/instagram.png";
      logo = "youtube"
  }
  else if (logo === "tiktok") {
      el.src="img/tiktok.png";
      logo = "instagram"
  }
}
function showpic() {
  var e = document.getElementById("test");
  var value = e.value;
  if (value==="js") {
    pic.src = "img/js.png"
  }
  else if (value==="idk") {
    pic.src = "img/boykisser.png"
  }
  else if (value==="rickroll") {
    window.open("https://youtu.be/dQw4w9WgXcQ?si=toqOp3HBRVml6q-0", "_blank");
  }
}
function rickroll() {
      window.open("https://youtu.be/dQw4w9WgXcQ?si=toqOp3HBRVml6q-0", "_blank");
}
function calculate(num) {
  if (operatorsave===0) {
    firstnum += String(num);
    elem[0].innerHTML = firstnum;
  }
  else {
    elem[0].innerHTML = "";
    secondnum += String(num);
    elem[0].innerHTML = secondnum;
  }
}
function operation(operator) {
  const operations = ["", "+", "-", "x", "/"];
  operatorsave = operator;
  elem[0].innerHTML = operations[operator];
}
function clean() {
  elem[0].innerHTML = "";
  firstnum = "";
  secondnum = "";
  operatorsave = 0;
}
function equals() {
  firstnum = Number(firstnum);
  secondnum = Number(secondnum);
  equations = [firstnum, firstnum+secondnum, firstnum-secondnum, firstnum * secondnum, firstnum/secondnum];
  elem[0].innerHTML = equations[operatorsave];
  if (operatorsave!==0) {
    firstnum="";
  }
  operatorsave=0;
  secondnum="";
}
function random() {
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
  randomnum = Math.floor(Math.random() * num2) + num1;
  randomel.innerHTML = "Your Random Number is: " + randomnum;
}