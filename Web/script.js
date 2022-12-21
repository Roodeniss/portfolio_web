
const hamb = document.querySelector(".hamburger");
const navMen = document.querySelector(".navBarMenu");
const btn = document.querySelector(".navBtn");

btn.addEventListener("click", () => {
   hamb.classList.toggle("active");
   navMen.classList.toggle("active");
})

/*
document.querySelectorAll(".linkMenu").forEach(n => n.addEventListener("click", () => {
   hamb.classList.remove("active");
   navMen.classList.remove("active");
}))
*/