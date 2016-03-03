var sections = document.getElementsByClassName("article-section");
var output = document.getElementById("output-target");
var h1 = document.getElementById("page-title");
var input = document.getElementById("keypress-input");
var addColor = document.getElementById("add-color");
var hulk = document.getElementById("make-large");
var border = document.getElementById("add-border");
var rounded = document.getElementById("add-rounding");
var guinea = document.getElementById("guinea-pig");
var buttons = document.getElementsByTagName("button");


sectionName(sections);
function sectionName(sections) {
  for (i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", click);
  }
};

function click(e) {
  output.innerHTML = "You clicked on the " + e.target.innerHTML + " section.";
};

h1.addEventListener("mouseover", function(hover) {
  var onHover =  hover.target.innerHTML;
  output.innerHTML = "You moved your mouse over the header."
});

h1.addEventListener("mouseout", function(hover) {
  var noHover =  hover.target.innerHTML;
  output.innerHTML = "You left me!!"
});

input.addEventListener("keyup", function() {
  var text = input.value;
  output.innerHTML = text;
});

addColor.addEventListener("click", function() {
  guinea.classList.toggle("add-color");
})

hulk.addEventListener("click", function() {
  guinea.classList.toggle("make-large");
})

border.addEventListener("click", function() {
  guinea.classList.toggle("add-border");
})

rounded.addEventListener("click", function() {
  guinea.classList.toggle("add-rounding");
})

sections[0].classList.add("bold");

sections[5].classList.add("italics");

for (i = 0; i < buttons.length; i++) {
  buttons[i].classList.add("block");
};


















