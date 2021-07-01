console.log("it works part 2");

var raam = document.getElementById("raam");
var raamModal = document.getElementById("raamModal");

var close = document.getElementById("raam-delete");

raam.onclick = function () {
  raamModal.style.display = "block";
};

close.onclick = function () {
  raamModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target.className == "modal-background") {
    raamModal.style.display = "none";
  }
};
