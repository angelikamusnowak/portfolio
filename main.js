let array = [];
for (i=1; i<7; i++) {
  array[i-1] = document.querySelector(`div #w${i}:not(.image)`);
};

let rotate = function(event) {
  event.target.style.transform = 'scale(1.05)';
};

let deRotate = function(event) {
  event.target.style.transform = 'scale(1)';
};

for (let element of array) {
element.addEventListener('mouseover', rotate);
element.addEventListener('mouseout', deRotate);
};