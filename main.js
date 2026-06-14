const menuBtn =
document.getElementById("menuBtn");

const menuItems =
document.getElementById("menuItems");

menuBtn.addEventListener("click",()=>{

menuBtn.classList.toggle("active");

menuItems.classList.toggle("show");

});
const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".fade-up")
.forEach((el)=>observer.observe(el));
