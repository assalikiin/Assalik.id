const visitTime =
localStorage.getItem(
"anwarussalikiin_visit"
);

if(visitTime){

const now = Date.now();

const twentyFourHours =
24 * 60 * 60 * 1000;

if(
now - Number(visitTime)
<
twentyFourHours
){

document
.getElementById("welcomeOverlay")
.style.display = "none";

document.body.style.overflow =
"auto";

}

}
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
document.addEventListener("click",(e)=>{

if(
!menuBtn.contains(e.target) &&
!menuItems.contains(e.target)
){

menuItems.classList.remove("show");
menuBtn.classList.remove("active");

}

});
const overlay =
document.getElementById("welcomeOverlay");

const enterBtn =
document.getElementById("enterSite");

const visitorName =
document.getElementById("visitorName");
if(!visitTime){

document.body.style.overflow="hidden";

}

document.body.style.overflow="hidden";

enterBtn.addEventListener("click",()=>{

const name =
visitorName.value.trim();

if(!name){

alert("Masukkan nama terlebih dahulu");

return;

}

fetch(
"https://docs.google.com/forms/d/e/1FAIpQLSfUGb6PYb6MQYG7S0W1MSmQbhnXT18WLaUlzx6pMaF4ndFErg/formResponse",
{
method:"POST",
mode:"no-cors",

headers:{
"Content-Type":
"application/x-www-form-urlencoded"
},

body:
`entry.398847967=${encodeURIComponent(name)}`
}
);
  localStorage.setItem(
"anwarussalikiin_visit",
Date.now()
);

overlay.style.transition="1s";

overlay.style.opacity="0";

setTimeout(()=>{

overlay.style.display="none";

document.body.style.overflow="auto";

},1000);

});
