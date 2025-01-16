document.querySelector("button").addEventListener("click", function () {
  document.querySelector(".ok").classList.toggle("show");
  document.querySelector(".bottom").classList.toggle("vanish");
  for (i = 0; i < 2; i++) {
    document.querySelectorAll("hr")[i].classList.toggle("vanish");
  }
});
