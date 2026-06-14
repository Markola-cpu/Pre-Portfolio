const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

document.querySelectorAll('.card,.service').forEach((el)=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all 0.8s ease";

observer.observe(el);

});

const words = [
"Virtual Assistant",
"Data Entry Specialist",
"Customer Support",
"Marketing Assistant"
];

let i = 0;

setInterval(()=>{

document.querySelector('.typing').textContent =
words[i];

i = (i + 1) % words.length;

},2000);