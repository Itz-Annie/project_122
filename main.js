let capture;

function setup() {
    // Create a canvas
    let canvas = createCanvas(640, 480);
    canvas.parent('photo-frame');

    // Access the webcam
    capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function draw() {
    background(255);

    // Display the webcam feed on canvas
    image(capture, 0, 0, 640, 480);

    // Draw shapes with different x, y coordinates and colors
    fill(255, 0, 0, 150);
    rect(50, 50, 100, 100);

    fill(0, 255, 0, 150);
    ellipse(200, 150, 100, 100);

    fill(0, 0, 255, 150);
    circle(500, 100, 80);

    fill(255, 255, 0, 150);
    rect(400, 300, 150, 100);
}

// Save the canvas as an image
function saveCanvas() {
    save('natasha-birthday-photo.png');
}
