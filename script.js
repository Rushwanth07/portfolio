const container = document.querySelector(".container");
const navItems = document.querySelectorAll(".navbar li");

navItems.forEach(item => {

item.addEventListener("click", () => {

const index = item.getAttribute("data-index");

container.style.transform = `translateX(-${index * 100}vw)`;

});

});



/* NEURAL NETWORK BACKGROUND */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let nodes = [];
let mouse = {x:0,y:0};

window.addEventListener("mousemove", e => {

mouse.x = e.x;
mouse.y = e.y;

});



for(let i=0;i<90;i++){

nodes.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.4,
vy:(Math.random()-0.5)*0.4

});

}



function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

nodes.forEach(node=>{

node.x += node.vx;
node.y += node.vy;

if(node.x<0 || node.x>canvas.width) node.vx *= -1;
if(node.y<0 || node.y>canvas.height) node.vy *= -1;

nodes.forEach(other=>{

let dx=node.x-other.x;
let dy=node.y-other.y;

let dist=Math.sqrt(dx*dx+dy*dy);

if(dist<120){

ctx.beginPath();
ctx.moveTo(node.x,node.y);
ctx.lineTo(other.x,other.y);
ctx.strokeStyle="rgba(0,255,255,0.08)";
ctx.stroke();

}

});

ctx.beginPath();
ctx.arc(node.x,node.y,2,0,Math.PI*2);
ctx.fillStyle="#00ffff";
ctx.fill();

});

requestAnimationFrame(animate);

}

animate();