let array = [];
for (var x = 1; x < 7; x++) {
  array[x-1] = `w${x}`;
};

console.log(array);

let creatingVariables = function() {

}

let works = [];
for (let i = 0; i < 6; i++) {
  works[i] = document.getElementById(array[i]);
};

let rotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 30deg)';
};

let deRotate = function(event) {
  event.target.style.transform = 'rotate3d(1, 1, 1, 0deg)';
};

for (let element of works) {
element.addEventListener('mouseover', rotate);
element.addEventListener('mouseout', deRotate);
}



