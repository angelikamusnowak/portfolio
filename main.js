let array = [];
for (i=1; i<7; i++) {
  array[i-1] = document.getElementById(`w${i}`);
};

let rotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 5deg)';
};

let deRotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 0deg)';
};

for (let element of array) {
element.addEventListener('mouseover', rotate);
element.addEventListener('mouseout', deRotate);
};