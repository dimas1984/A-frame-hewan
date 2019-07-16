// LOAD THE PAGE BEFORE STARTING ANY SCRIPTS
$(function() {  
  //AUDIO CLICK EVENTS
  document.querySelector('.audioInfo').addEventListener('click', function (evt) {
    
  });

  //AMBIENT AUDIO CONTROLS
  
  var audioMuteIcon = "https://cdn.glitch.com/a48c9209-3a0b-4c16-913d-7099e31abb4c%2FmuteAudio.png?1554591121733";
  var audioPlayIcon = "https://cdn.glitch.com/a48c9209-3a0b-4c16-913d-7099e31abb4c%2FplayAudio.png?1554590333243";
  var playState = "muted";
  $('.audioMute').click(function (evt) {
    if (playState === "muted") {
      $(this).attr("src",audioPlayIcon);
      playState = "playing";
    } else if (playState === "playing") {
      $(this).attr("src",audioMuteIcon);
      playState = "muted";
    }
  });
});


