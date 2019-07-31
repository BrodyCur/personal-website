// NAVBAR SCROLL

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-85px";
  }

  prevScrollpos = currentScrollPos;
}


// SMOOTH SCROLLING

let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 300,
  speedAsDuration: true
});