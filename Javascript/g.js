const rightChevron = document.getElementById("right-chevron");
const navBar = document.querySelector(".nav-bar");
const nav = document.querySelectorAll(".nav");
rightChevron.addEventListener("click", () => {
  navBar.classList.toggle("show-nav");
  
});


