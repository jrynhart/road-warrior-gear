const row = document.getElementById("imageRow");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {
  row.scrollBy({ left: row.offsetWidth, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  row.scrollBy({ left: -row.offsetWidth, behavior: "smooth" });
});
