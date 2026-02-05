const music=document.getElementById("music");

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function unlock(){
  if(document.getElementById("pass").value==="anjali"){
    music.play();
    show("album");
    startAlbum();
  }else{
    document.getElementById("err").innerText="Wrong password 😌";
  }
}

/* ALBUM */
const imgs=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg"];
let i=0;
function startAlbum(){
  const img=document.getElementById("albumImg");
  const albumInt=setInterval(()=>{
    i++;
    if(i<imgs.length){
      img.src=imgs[i];
    }else{
      clearInterval(albumInt);
      startCompliments();
    }
  },2500);
}

/* COMPLIMENTS */
const compliments=[
  "Your smile feels like home ❤️",
  "You make ordinary days beautiful",
  "Your laugh is my favorite sound",
  "You light up my world",
  "You are my calm & chaos",
  "You feel like destiny 💕"
];
let c=0;
function startCompliments(){
  show("compliment");
  const text=document.getElementById("compText");
  const compInt=setInterval(()=>{
    text.innerText=compliments[c];
    c++;
    if(c===compliments.length){
      clearInterval(compInt);
      setTimeout(()=>show("question"),2000);
    }
  },3000);
}

/* NO BUTTON */
const no=document.getElementById("no");
no.onclick=()=>{
  navigator.vibrate?.(150);
  no.style.left=Math.random()*200+"px";
  no.style.top=Math.random()*200+"px";
};

/* YES */
document.getElementById("yes").onclick=()=>{
  show("celebrate");
  setTimeout(()=>{
    document.getElementById("message").classList.remove("hidden");
  },2000);
  setTimeout(()=>{
    document.getElementById("dateBox").classList.remove("hidden");
  },6000);
};
