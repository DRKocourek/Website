let logo = "github";
let picture = "";
const el = document.querySelector("img");
const pic = document.getElementById("picture");
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