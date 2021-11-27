function main() {
  // this is the accelerometer in the mobile device
  window.addEventListener("deviceorientation", onOrientationChange)

  // grab the video display of the camera
  navigator.mediaDevices.getUserMedia({video:{
    facingMode: 'environment'
  }})
  .then(function(signal) {
    const video = document.getElementById("myVideo");
    video.srcObject = signal;
    video.play();
  })
  // .then(stream => {
  //   const video = document.getElementById("myVideo");
  //   video.srcObject = stream;
  //   video.onloadedmetadata = (e) => {
  //     video.play();
  //   }
  // })
  .catch(function(err) {
    alert(err);
  })
}

function onOrientationChange(event) {
  alert("yes working")
  // measure how the phone rotates on the beta axis
  let beta_angle = event.beta
  // change the 0 degree orientation from "flat" to "upright"
  let angle = beta_angle - 90;
  // remove negative values
  if (angle < 0) {
    angle = 0;
  }

  // measured distance to object
  const distanceToObject = document.getElementById("mySlider").value;
  document.getElementById("myLabel").innerHTML = 
    "Distance to object: " + distanceToObject +" meters";
  // get the height side with angle from the phone by converting it
  // to radians and multiplying it by the distance side
  const height = Math.tan(angle * Math.PI/180) * distanceToObject;
  document.getElementById("heightInfo").innerHTML = 
    height.toFixed(1) + " m or " + (height*3.28).toFixed(1) + " ft (" + angle.toFixed(1) + "&deg;)";
}