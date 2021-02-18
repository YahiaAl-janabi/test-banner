var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var container1 = document.getElementById("container");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");

function display2() {
  container2.style.display = "block";
  container1.style.display = "none";
  container3.style.display = "none";
}

function display3() {
  container2.style.display = "none";
  container1.style.display = "none";
  container3.style.display = "block";
}

option1.onclick = function () {
  display2();
};

option2.onclick = function () {
  display3();
};
