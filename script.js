const music=document.getElementById("bgMusic");
document.addEventListener("click",()=>music.play(),{once:true});

// PASSWORD
function checkPassword(){
  const val=document.getElementById("passwordInput").value;
  if(val==="anjali"){
    show("slideshow");
    startSlideshow();
  }else{
    document.getElementById("lockError").innerText="Wrong password 😌";
  }
}

// SCREEN SWITCH
function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// SLIDESHOW
const imgs=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"];
let i=0;
function startSlideshow(){
  const img=document.getElementById("slideImg");
  const interval=setInterval(()=>{
    i++;
    if(i<imgs.length){
      img.src=imgs[i];
    }else{
      clearInterval(interval);
      startCompliments();
    }
  },2500);
}

// COMPLIMENTS
const compliments=[
  "Your smile feels like home ❤️",
  "You make ordinary days special",
  "Your laugh is my favorite sound",
  "You light up every room",
  "You make my heart feel safe",
  "You are effortlessly beautiful",
  "With you everything feels softer",
  "You feel like destiny 💕"
];
let c=0;
function startCompliments(){
  show("compliments");
  const text=document.getElementById("complimentText");
  const interval=setInterval(()=>{
    text.innerText=compliments[c];
    c++;
    if(c===compliments.length){
      clearInterval(interval);
      setTimeout(()=>show("question"),2000);
    }
  },3000);
}

// NO BUTTON GAME
const noBtn=document.getElementById("noBtn");
noBtn.onclick=()=>{
  navigator.vibrate?.(200);
  noBtn.style.left=Math.random()*200-100+"px";
  noBtn.style.top=Math.random()*200-100+"px";
};

// YES
document.getElementById("yesBtn").onclick=()=>{
  show("final");
};
