const dateSpan = document.querySelectorAll(".currentDate");

dateSpan.forEach(item => {
  item.innerHTML = new Date().toLocaleDateString(
    "es", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
});

let rand = Math.floor(Math.random() * (15 - 5) + 5);
$('.data-end-place').text(rand)