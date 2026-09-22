
const track=document.querySelector('.track');
const slides=track.children;
const tot=slides.length;
let in=0;
setInterval(()=>{
  in=(in+1)%tot;
  track.style.transform=`translateX(-${in*(100/tot)}%)`;
},5000);


const s=document.querySelector('.slyr');
const t=document.querySelector('.trac');

const nxtBtn=document.getElementById('next-btn');
const prevBtn=document.getElementById('prev-btn');

let i=0;
let total=4;

nxtBtn.addEventListener("click",function (){
  go(1)
});

prevBtn.addEventListener("click",function (){
  go(-1)
});

function go(step){
  let newIdx=i+step;
  if (newIdx < 0) {
    newIdx = 0;
  }
  if (newIdx > total - 1) {
    newIdx = total - 1;
  }

  i=newIdx;
  render();
}

function render(){
    t.style.transform=`translateX(-${i*25}%)`;
}





/*const track = document.getElementById('track');
let index = 0;
const ts=3;
setInterval(() => {
  index = (index + 1) % ts;
  track.style.transform = `translateX(-${index * 100/ts}%)`;
}, 5000); *///change every 3 seconds//