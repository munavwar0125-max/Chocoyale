
const t=documemt.getElementsByClass('track');
const slides=t.child;
const tot=slides.length;
setTimeout(()=>{
  i=(i+1)%tot;
  track.style.transform=`translateX(-${i*(100/tot)}%)`;
},2000);













/*const track = document.getElementById('track');
let index = 0;
const ts=3;
setInterval(() => {
  index = (index + 1) % ts;
  track.style.transform = `translateX(-${index * 100/ts}%)`;
}, 5000); *///change every 3 seconds//