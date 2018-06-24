let input;
function setup() {
  noCanvas();
  input = createInput();
  input.changed(newtext);
}
function newtext() {
  createP(input.value());
}
