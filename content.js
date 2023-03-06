var customPlaybackRate = 1;
var letYoutubeHandleNormal = true;
var lastSpeedElement = null;
var customDebugMode = false;

function increasePlaybackSpeedOverride() {
  var video = document.getElementsByTagName("video")[0];
  //if (letYoutubeHandleNormal && customPlaybackRate > .4 && customPlaybackRate < 1.85) {
  if (letYoutubeHandleNormal && video.playbackRate > .4 && video.playbackRate < 1.85) {
    // let youtube handle it
    customPlaybackRate = video.playbackRate;
    displayNewSpeed(video.playbackRate, "no override");
    return; 
  }
  
  if (video.playbackRate <= .1 || customPlaybackRate <= .1) {
    customPlaybackRate = .1;
  }
  
  customPlaybackRate += 0.1;
  if (customPlaybackRate >= 5) {
    customPlaybackRate = 5;
  }

  document.getElementsByTagName("video")[0].playbackRate = customPlaybackRate;
  displayNewSpeed(video.playbackRate, "overriden");
  //event.preventDefault();
  event.stopPropagation();

}

function decreasePlaybackSpeedOverride() {
  var video = document.getElementsByTagName("video")[0];
  //if (letYoutubeHandleNormal && customPlaybackRate > .4 && customPlaybackRate < 1.85) {
  if (letYoutubeHandleNormal && video.playbackRate > .4 && video.playbackRate < 1.85) {
    // let youtube handle it
    customPlaybackRate = video.playbackRate;
    displayNewSpeed(video.playbackRate, "no override");
    return; 
  }
  
  if (video.playbackRate >= 5 || customPlaybackRate >= 5) {
    customPlaybackRate = 5;
  }
  
  customPlaybackRate -= 0.1;
  if (customPlaybackRate <= .1) {
    customPlaybackRate = .1;
  }
  document.getElementsByTagName("video")[0].playbackRate = customPlaybackRate;
  displayNewSpeed(video.playbackRate, "overridden");

  //event.preventDefault();
  event.stopPropagation();
}

function increasePlaybackSpeed() {
  var video = document.getElementsByTagName("video")[0];
  if (video.playbackRate >= 5) {
    video.playbackRate = 5;
  } else {
    video.playbackRate += 0.1;
  }
  
  customPlaybackRate = video.playbackRate;
  displayNewSpeed(video.playbackRate, "increased");
}

function decreasePlaybackSpeed() {
  var video = document.getElementsByTagName("video")[0];
  if (video.playbackRate <= 0.1) {
    video.playbackRate = 0.1;
  } else {
    video.playbackRate -= 0.1;
  }

  customPlaybackRate = video.playbackRate;
  displayNewSpeed(video.playbackRate, "decreased");
}

function displayNewSpeed(speed, note = "") {
  try { 
    if (lastSpeedElement != null) {
      document.body.removeChild(lastSpeedElement); 
    }
  } catch {}
  var speedElement = document.createElement("div");
  var content = "Speed: " + speed.toFixed(2);
  if (customDebugMode) {
    content += " " + customPlaybackRate.toFixed(2) + " " + note;
  }
  speedElement.textContent = content;
  speedElement.style.position = "fixed";
  speedElement.style.top = "10px";
  speedElement.style.right = "10px";
  speedElement.style.backgroundColor = "#333";
  speedElement.style.color = "#fff";
  speedElement.style.padding = "5px";
  speedElement.style.borderRadius = "5px";
  speedElement.style.zIndex = "9999";
  document.body.appendChild(speedElement);
  lastSpeedElement = speedElement;
  setTimeout(function() {
    document.body.removeChild(speedElement);
  }, 3000);
}

document.addEventListener("keydown", function(event) {
  if (event.key == "<") {
    decreasePlaybackSpeedOverride();
  } else if (event.key == ">") {
    increasePlaybackSpeedOverride();
  } else if (event.key == ",") {
    if (!document.getElementsByTagName("video")[0].paused) {
      decreasePlaybackSpeed();
      //event.preventDefault();
      event.stopPropagation();
    }
  } else if (event.key == ".") {
    if (!document.getElementsByTagName("video")[0].paused) {	  
      increasePlaybackSpeed();
      //event.preventDefault();
      event.stopPropagation();
    }
  }
});
