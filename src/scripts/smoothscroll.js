// smoothScroll.js
document.getElementById("scrollButton").addEventListener("click", function () {
    document.getElementById("targetSection").scrollIntoView({ behavior: "smooth" });
  });
  