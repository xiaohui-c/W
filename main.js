let num = document.getElementsByTagName("p");
let start = document.querySelectorAll("button");
var self;
let bind = false;
start[0].addEventListener("click", function settime() {
  if (!bind) {
    bind = true;
    self = window.setInterval(
      (time) =>
        (num[0].innerHTML = Math.round(Math.random() * 52 + 1) + "<br>"),
      100
    );
  }
  // let bind = false;
});
start[1].addEventListener(
  "click",
  (stoptime) => (bind = true ? window.clearInterval(self) : (bind = true))
);
