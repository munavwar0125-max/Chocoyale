
const track=document.querySelector('.track');
const slides=track.children;
const tot=slides.length;
let idx=0;
setInterval(()=>{
  idx=(idx+1)%tot;
  track.style.transform=`translateX(-${idx*(100/tot)}%)`;
},5000);


const s=document.querySelector('.slyr');
const t=document.querySelector('.trac');

const nxtBtn=document.getElementById('next-btn');
const prevBtn=document.getElementById('prev-btn');

let i=0;
let total=9;

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
    t.style.transform=`translateX(-${i*11.11}%)`;
}





