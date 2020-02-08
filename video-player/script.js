const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
  return (video.paused) ? video.play() : video.pause()
}


// update play/pause icon
function updatePlayIcon() {
  return (video.paused) ? 
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>' :
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
}


// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

}


// Set video time to progress
function setVideoProgress(){
  video.currentTime = (+progress.value * video.duration) / 100;
}


// Stop video
function stopVideo(){
  video.currentTime = 0;
  video.pause()
}


// Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

