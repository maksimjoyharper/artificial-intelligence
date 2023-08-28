let offset = 3;

const blogCards = document.querySelector(".blog-cards");

document.getElementById("btn2").addEventListener("click", function () {
  offset += 536;
  if (offset > 1072) {
    offset = 0;
  }
  blogCards.style.left = -offset + "px";
});

document.getElementById("btn1").addEventListener("click", function () {
  offset -= 536;
  if (offset < 0) {
    offset = 1072;
  }
  blogCards.style.left = -offset + "px";
});
