let button = document.getElementById("button");
let box = document.getElementById("changeme");
console.log(box.style)
function changer() {
  console.log(box.style.background);
    if (box.style.background == "red") {
    box.style.background = "blue";
  } else 
 {
    box.style.background = "red";
  }
}
