document.addEventListener('DOMContentLoaded', (event) => {
  // NAVBAR SCROLL
  
  let hamburger = document.querySelector(".hamburger");
  let dropdown = document.querySelector(".dropdown-content");
  let prevScrollpos = window.pageYOffset;
  
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-100px";
      hamburger.classList.toggle("change");
      dropdown.classList.toggle("dropdown-display");
    }
  
    prevScrollpos = currentScrollPos;
  }
  
  
  // SMOOTH SCROLLING
  
  new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true
  });
  
  // COMING SOON ALERT

  let alertButton = document.querySelectorAll(".coming-soon")

  for (var i = 0; i < alertButton.length; i++) {
    alertButton[i].addEventListener('click', e => {
      e.preventDefault;
      
      alert('Website coming soon!');
    });
  };

  // HAMBURGER CLICK

  hamburger.addEventListener('click', e => {
    hamburger.classList.toggle("change");
    dropdown.classList.toggle("dropdown-display");
  });

  // document.addEventListener('scroll', e => {
  //   dropdown.classList.toggle("dropdown-display");
  // });
});