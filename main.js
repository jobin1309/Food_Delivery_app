function hideA(x) {
  if (x.checked) {
    document.getElementById("email").style.visibility = "hidden";
    document.getElementById("mobile").style.visibility = "visible";
  }
}

function hideB(x) {
  if (x.checked) {
    document.getElementById("mobile").style.visibility = "hidden";
    document.getElementById("email").style.visibility = "visible";
  }
}
