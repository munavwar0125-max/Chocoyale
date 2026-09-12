

const track = document.getElementById('track');
let index = 0;

setInterval(() => {
  index = (index + 1) % 3;
  track.style.transform = `translateX(-${index * 33.333}%)`;
}, 1000); // change every 3 seconds