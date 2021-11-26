function main() {
  // this is the accelerometer in the mobile device
  window.addEventListener("deviceorientation", onOrientationChange)
}

function onOrientationChange(event) {
  // measure how the phone rotates on the beta axis
  let beta_angle = event.beta
  // change the 0 degree orientation from "flat" to "upright"
  let angle = beta_angle - 90;
  // remove negative values
  if (angle < 0) {
    angle = 0;
  }
  console.log(angle)
}