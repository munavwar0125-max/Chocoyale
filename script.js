

const track = document.getElementById('track');
let index = 0;
const ts=3;
setInterval(() => {
  index = (index + 1) % ts;
  track.style.transform = `translateX(-${index * 100/ts}%)`;
}, 3000); // change every 3 seconds