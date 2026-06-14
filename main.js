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

}else{

entry.target.classList.remove("show");

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
let selectedEmoji = "";

const emojis =
document.querySelectorAll(".emoji-rate");

emojis.forEach((emoji)=>{

emoji.addEventListener("click",()=>{
  selectedEmoji =
emoji.textContent;

emojis.forEach((e)=>{
e.classList.remove("active");
});

emoji.classList.add("active");

setTimeout(()=>{

emoji.classList.remove("active");

},250);

emoji.animate(
[
{transform:"scale(1)"},
{transform:"scale(1.35) rotate(8deg)"},
{transform:"scale(1)"}
],
{
duration:250
}
);

});

});
const sendFeedback =
document.getElementById("sendFeedback");

const feedbackInput =
document.querySelector(".feedback-input");
sendFeedback.addEventListener("click",()=>{

console.log(selectedEmoji);

console.log(feedbackInput.value);

});
const ratingSlider =
document.getElementById("ratingSlider");

const ratingValue =
document.getElementById("ratingValue");
const ratingEmoji =
document.getElementById("ratingEmoji");

ratingSlider.addEventListener("input",()=>{

const value =
Number(ratingSlider.value);

ratingValue.textContent =
value + "%";

if(value <= 20){

ratingEmoji.textContent = "😭";

}else if(value <= 40){

ratingEmoji.textContent = "😕";

}else if(value <= 60){

ratingEmoji.textContent = "😐";

}else if(value <= 80){

ratingEmoji.textContent = "😊";

}else{

ratingEmoji.textContent = "😍";

}

});
