function show(){
    const element=document.getElementById("text");
    element.innerHTML = "Meow"
}
function print(){
    const parelement = document.querySelector("p");
    let print = document.getElementById("text").value;
    parelement.innerHTML = print;
}