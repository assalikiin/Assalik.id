const menuBtn =
document.getElementById("menuBtn");

const menuItems =
document.getElementById("menuItems");

menuBtn.addEventListener("click",()=>{

menuBtn.classList.toggle("active");

menuItems.classList.toggle("show");

});
