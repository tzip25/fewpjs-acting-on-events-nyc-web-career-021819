const dodger = document.getElementById("dodger");


function moveDodgerLeft(){
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left - 1}px`;
}
function moveDodgerRight(){
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);
  dodger.style.left = `${left + 1}px`;
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft()
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight()
  }
});
