let sliders = [];
let angle = 0;
let angleChange = 0.1
let phaseChange = 0.01;
let count = 100;

let angleSlider, phaseSlider, output;

function setup() {
	noCanvas();
	for (let i = 0; i < count; i++) {
		sliders[i] = createSlider(0, 255, 0);
	}
	createElement("br", "");
	createP("Change these slider below: Angle Slider and Phase Slider");
	angleSlider = createSlider(0, 0.5, 0.1, 0.001);
	phaseSlider = createSlider(-0.1, 0.1, 0.05, 0.001);
	angleSlider.changed(changeOutput);
	phaseSlider.changed(changeOutput);
	output = createP("Angle: " + angleSlider.value() + " | Phase: " + phaseSlider.value());
}

function draw() {
	let phase = 0;
	for (let i = 0; i < count; i++) {
		x = map(sin(angle + phase), -1, 1, 0, 255);
		sliders[i].value(x);
		phase += phaseSlider.value();
	}
	angle += angleSlider.value();

}

function changeOutput() {
	output.html("Angle: " + angleSlider.value() + " | Phase: " + phaseSlider.value());
}