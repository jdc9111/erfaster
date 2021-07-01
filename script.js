console.log("it works");

var ohip = document.getElementById("ohip");
var ohipModal = document.getElementById("ohip-modal");

var close = document.getElementById("ohip-delete");

ohip.onclick = function () {
  ohipModal.style.display = "block";
};

close.onclick = function () {
  ohipModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target.className == "modal-background") {
    ohipModal.style.display = "none";
  }
};
