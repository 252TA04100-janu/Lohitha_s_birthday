// Loader

window.onload = function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},3000);

};

// Countdown

const birthday = new Date("August 8, 2026 00:00:00").getTime();

setInterval(function(){

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;

document.getElementById("hours").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("seconds").innerHTML = seconds;

},1000);


// Gallery Animation

const images=document.querySelectorAll(".gallery img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";

img.style.transform="translateY(80px)";

img.style.transition="1s";

observer.observe(img);

});


// Floating Hearts

setInterval(()=>{

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="fall 6s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},500);


// Floating Roses

setInterval(()=>{

let rose=document.createElement("div");

rose.innerHTML="🌹";

rose.style.position="fixed";

rose.style.left=Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.fontSize="30px";

rose.style.animation="fall 8s linear";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},8000);

},900);


// Butterflies

setInterval(()=>{

let butterfly=document.createElement("div");

butterfly.innerHTML="🦋";

butterfly.style.position="fixed";

butterfly.style.left="-50px";

butterfly.style.top=Math.random()*90+"vh";

butterfly.style.fontSize="30px";

butterfly.style.transition="12s linear";

document.body.appendChild(butterfly);

setTimeout(()=>{

butterfly.style.left="110vw";

},100);

setTimeout(()=>{

butterfly.remove();

},12000);

},2500);
/* Fireworks */

function firework(){

let colors=["#ff4081","#ffd700","#00bcd4","#9c27b0","#4caf50"];

for(let i=0;i<40;i++){

let spark=document.createElement("div");

spark.style.position="fixed";
spark.style.width="8px";
spark.style.height="8px";
spark.style.borderRadius="50%";
spark.style.background=colors[Math.floor(Math.random()*colors.length)];

spark.style.left="50vw";
spark.style.top="50vh";

spark.style.zIndex="9999";

document.body.appendChild(spark);

let x=(Math.random()-0.5)*700;
let y=(Math.random()-0.5)*700;

spark.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1800,
easing:"ease-out"

});

setTimeout(()=>{

spark.remove();

},1800);

}

}

/* Confetti */

function confetti(){

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.innerHTML=["🎉","✨","🎊","💖","🌸"][Math.floor(Math.random()*5)];

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-50px";

c.style.fontSize=(15+Math.random()*20)+"px";

c.style.animation="fall "+(3+Math.random()*4)+"s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},7000);

}

}

/* Surprise after 5 seconds */

setTimeout(()=>{

firework();

confetti();

alert("🎂 Happy Birthday Narala Guru Lohitha ❤️🌹🦋");

},5000);


/* CSS animation created by JS */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{

0%{

transform:translateY(-80px) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(120vh) rotate(720deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
/* ==========================
   PHOTO SLIDESHOW
========================== */

const galleryImages = document.querySelectorAll(".gallery img");

let currentImage = 0;

function highlightPhoto(){

galleryImages.forEach(img=>{

img.style.transform="scale(1)";
img.style.boxShadow="0 10px 20px rgba(0,0,0,.15)";
img.style.opacity=".7";

});

galleryImages[currentImage].style.transform="scale(1.08)";
galleryImages[currentImage].style.boxShadow="0 0 40px #ff4081";
galleryImages[currentImage].style.opacity="1";

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

}

highlightPhoto();

setInterval(highlightPhoto,3000);


/* ==========================
   AGE WISE CAPTIONS
========================== */

const ageText=[


"❤️👶 A Beautiful Baby wearing a Lovely Red Frock 🌹",

"💙👶 A Cute Little Baby wearing a Beautiful Blue Frock 🦋",

"🖤👶 An Adorable Baby wearing a Pretty Black Frock ✨",

"👨‍👩‍👧 A Beautiful Family Filled with Love and Happiness ❤️",

"😍 Those Gorgeous Eyes Can Melt Every Heart ✨",

"🐄🌸 A Precious Moment with Her Lovely Cow ❤️",

"💛🌼 Looking Adorable in a Beautiful Yellow Frock 🌻",

"🐘🙏 Ready to Celebrate Ganesh Pooja with Devotion ❤️",

"🌺✨ A Gorgeous Traditional Look Full of Grace 💖",

"👸💖 Here She Looks Like a Beautiful Princess ✨",

"❤️👩 A Sweet and Precious Moment with Her Mother 🌹",

"🥰👭 Introducing My Lovely Little Sister ❤️",

"💞👭 A Heart Full of Love Between Two Sisters 💖",

"😜✨ Her Naughty and Cute Side That Everyone Loves ❤️",

"📸👭 A Beautiful Click with Her Loving Sister 🌸",

"💕🌹 Posing Happily Together with Her Sister 🦋",

"😊✨ Discovering Another Beautiful Side of Her ❤️",

"👭🌺 Two Beautiful Sisters Looking Gorgeous in Sarees 💖",

"❤️📷 One of My Most Favorite Photos with My Sister 🥰",

"🌸👑 Her Complete Saree Look Is Simply Stunning ❤️",

"🙏😇 My God-Gifted Angel – My Greatest Blessing ❤️",

"👑✨ A Perfect Princess Look Full of Elegance ❤️",

"😇🌸 She Looks Like a Beautiful Angel on Earth ❤️",

"🖤🤍 A Timeless Black & White Memory Filled with Love 📸",

"😜❤️ Finally... One More Naughty & Cute Smile to End This Beautiful Journey 🥰🎉"

];


galleryImages.forEach((img,index)=>{

let caption=document.createElement("p");

caption.innerHTML=ageText[index];

caption.style.textAlign="center";

caption.style.marginTop="10px";

caption.style.color="#e91e63";

caption.style.fontWeight="bold";

img.after(caption);

});


/* ==========================
   SCROLL ANIMATION
========================== */

window.addEventListener("scroll",()=>{

document.querySelectorAll("section").forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.style.opacity="1";

sec.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

});
/* ==========================
   FLOATING BIRTHDAY WISHES
========================== */

const wishes = [

"❤️ Happy Birthday Lohitha ❤️",
"🌹 Stay Blessed 🌹",
"🦋 Keep Smiling 🦋",
"🎂 God Bless You 🎂",
"💖 We Love You 💖",
"🌸 Shine Forever 🌸",
"🥰 Best Sister Ever 🥰"

];

setInterval(()=>{

let wish=document.createElement("div");

wish.innerHTML=wishes[Math.floor(Math.random()*wishes.length)];

wish.style.position="fixed";

wish.style.left=Math.random()*80+"vw";

wish.style.top="100vh";

wish.style.fontSize="22px";

wish.style.color="#e91e63";

wish.style.fontWeight="bold";

wish.style.zIndex="999";

wish.style.transition="8s linear";

document.body.appendChild(wish);

setTimeout(()=>{

wish.style.top="-100px";

wish.style.opacity="0";

},100);

setTimeout(()=>{

wish.remove();

},8500);

},2500);


/* ==========================
   SPARKLING STARS
========================== */

setInterval(()=>{

let star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(15+Math.random()*20)+"px";

star.style.opacity="0";

star.style.transition="2s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="1";

},100);

setTimeout(()=>{

star.style.opacity="0";

},1800);

setTimeout(()=>{

star.remove();

},2200);

},300);


/* ==========================
   BALLOON RELEASE
========================== */

function releaseBalloons(){

for(let i=0;i<25;i++){

let b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="fixed";

b.style.left=Math.random()*100+"vw";

b.style.bottom="-60px";

b.style.fontSize=(25+Math.random()*20)+"px";

b.style.transition=(5+Math.random()*5)+"s linear";

document.body.appendChild(b);

setTimeout(()=>{

b.style.bottom="120vh";

},100);

setTimeout(()=>{

b.remove();

},10000);

}

}


/* ==========================
   FINAL CELEBRATION
========================== */

setTimeout(()=>{

releaseBalloons();

firework();

confetti();

},10000);
/* ==========================
   GRAND FINALE
========================== */

function grandFinale(){

firework();
confetti();
releaseBalloons();

let screen=document.createElement("div");

screen.style.position="fixed";
screen.style.left="0";
screen.style.top="0";
screen.style.width="100%";
screen.style.height="100%";
screen.style.background="rgba(255,255,255,.96)";
screen.style.display="flex";
screen.style.justifyContent="center";
screen.style.alignItems="center";
screen.style.flexDirection="column";
screen.style.zIndex="99999";
screen.style.textAlign="center";
screen.style.padding="20px";

screen.innerHTML=`

<h1 style="font-size:60px;color:#e91e63;font-family:cursive;">
🎂 Happy Birthday 🎂
</h1>

<h2 style="font-size:42px;color:#ff4081;">
Narala Guru Lohitha ❤️
</h2>

<p style="font-size:22px;
max-width:850px;
line-height:2;
color:#444;">

Hi My Dear Little Sister ❤️🌹<br><br>

You are the only person in my life who trusts me completely.

You are my God gifted second mother.

Thank you for supporting me,
encouraging me,
caring for me
and standing beside me always.

You are my greatest blessing,
my lovely sister,
my best friend
and my biggest supporter.

May God bless you with
Love ❤️
Success 🌸
Good Health 🌹
Peace 🦋
and Endless Happiness ✨

Happy Birthday My Dear Sister ❤️🥰

I Love You Forever ❤️

</p>

<button id="closeFinal"
style="
margin-top:30px;
padding:15px 40px;
border:none;
border-radius:40px;
background:#ff4081;
color:white;
font-size:20px;
cursor:pointer;
">
Close ❤️
</button>

`;

document.body.appendChild(screen);

document
.getElementById("closeFinal")
.onclick=function(){

screen.remove();

};

}

/* Show finale after 20 seconds */

setTimeout(grandFinale,20000);

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

console.log("❤️ Happy Birthday Website Loaded Successfully ❤️");
