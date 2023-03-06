function increasePlaybackSpeed() {
  var video = document.getElementsByTagName("video")[0];
  if (video.playbackRate >= .2 && video.playbackRate < 5) {
    video.playbackRate += 0.2;
    displayNewSpeed(video.playbackRate);
  }
}

function decreasePlaybackSpeed() {
  var video = document.getElementsByTagName("video")[0];
  if (video.playbackRate > .3) {
    video.playbackRate -= 0.2;
    displayNewSpeed(video.playbackRate);
  }
}

function displayNewSpeed(speed) {
  var speedElement = document.createElement("div");
  speedElement.textContent = "Speed: " + speed.toFixed(1);
  speedElement.style.position = "fixed";
  speedElement.style.top = "10px";
  speedElement.style.right = "10px";
  speedElement.style.backgroundColor = "#333";
  speedElement.style.color = "#fff";
  speedElement.style.padding = "5px";
  speedElement.style.borderRadius = "5px";
  speedElement.style.zIndex = "9999";
  document.body.appendChild(speedElement);
  setTimeout(function() {
    document.body.removeChild(speedElement);
  }, 3000);
}

document.addEventListener("keydown", function(event) {
  if (event.key == ",") {
    event.preventDefault();
    decreasePlaybackSpeed();
  } else if (event.key == ".") {
    event.preventDefault();
    increasePlaybackSpeed();
  }
});
