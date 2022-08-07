const target = document.querySelector(".large_text");

function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
