//Burger-menu
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const pageItems = document.querySelector(".page-items");

openIcon.addEventListener("click", function (){
    pageItems.classList.add("active");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
});

closeIcon.addEventListener("click", function (){
    pageItems.classList.remove("active");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
});