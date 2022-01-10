let w1 = document.getElementById('w1');
let w2 = document.getElementById('w2');
let w3 = document.getElementById('w3');
let w4 = document.getElementById('w4');
let w5 = document.getElementById('w5');
let w6 = document.getElementById('w6');

let works = [w1, w2, w3, w4, w5, w6];

let rotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 5deg)';
};

let deRotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 0deg)';
};

for (let element of works) {
element.addEventListener('mouseover', rotate);
element.addEventListener('mouseout', deRotate);
}



