const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {
slides[current].classList.remove("active");

current++;

if(current >= slides.length){
current = 0;
}

slides[current].classList.add("active");

},5000);

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString("id-ID");

document.getElementById("date").innerHTML =
new Intl.DateTimeFormat("id-ID",{
dateStyle:"full"
}).format(now);

}

setInterval(updateClock,1000);

updateClock();
