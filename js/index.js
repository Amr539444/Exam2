///==== Start type js  ====///
var typed = new Typed("#element", {
  strings: ["Larry Daniels", "Developer", "Designer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
///==== End type js  ====///

///==== Start AOS  ====///
AOS.init();
///==== End AOS  ====///

///==== Start scroll  navbar ====///

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

///==== End scroll  navbar ====///

///==== Start   numbers ====///

let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

valueDisplays.forEach((valueDisplay) => {
  let starValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute
  ("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    starValue += 1;
    valueDisplay.textContent = starValue;
    if (starValue == endValue){
      clearInterval(counter);
    }
  }, duration);
});
///==== End   numbers ====///



































