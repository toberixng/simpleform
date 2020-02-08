const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
  return (video.pause) ? video.play() : video.pause()
}

// update play/pause icon
function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  } 
}

// Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress(){
  return true;
}

// Stop video
function stopVideo(){
  return true;
}


// Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', togglePlayIcon);
video.addEventListener('click', togglePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

