// User Interface Logic
let h1 = document.querySelector("h1");
h1.onmouseover = function() {
  window.alert("I am a heading element.");
};

let p = document.querySelector("p");
p.onmouseover = function() {
  document.querySelector("p>em").innerText = "Don't be surprised";
};

let img = document.querySelector("img");
img.onmouseover = function() {
  img.style.height = "700px";
};
