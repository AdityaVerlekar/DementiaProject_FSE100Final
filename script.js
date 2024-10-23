function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(32);
  textAlign(CENTER, CENTER);
}
function draw() {
  background(220);
  text("Game Menu", width / 2, height / 3);
  // Button 1: Game 1
  fill(0, 128, 0); // Green
  rect(width / 2 - 50, height / 2 - 80, 100, 60);
  fill(255);
  text("Game 1", width / 2, height / 2 - 30);
  // Button 2: Game 2
  fill(0, 0, 128); // Blue
  rect(width / 2 - 50, height / 2 + 10, 100, 60);
  fill(255);
  text("Game 2", width / 2, height / 2 + 60);
  // Button 3: Game 3
  fill(128, 0, 0); // Red
  rect(width / 2 - 50, height / 2 + 100, 100, 60);
  fill(255);
  text("Game 3", width / 2, height / 2 + 150);
}
function mousePressed() {
  // Check if mouse is within a button area
  if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
      mouseY > height / 2 - 80 && mouseY < height / 2 - 20) {
    // Game 1
    console.log("Game 1 selected");
  } else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
             mouseY > height / 2 + 10 && mouseY < height / 2 + 70) {
    // Game 2
    console.log("Game 2 selected");
  } else if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
             mouseY > height / 2 + 100 && mouseY < height / 2 + 160) {
    // Game 3
    console.log("Game 3 selected");
  }
}
