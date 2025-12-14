function blowCandle() {
  const candleImage = document.getElementById('candleImage');
  const scaryImage  = document.getElementById('scaryImage');
  const scarySound  = document.getElementById('scarySound');

  // turn off candle
  candleImage.src = './style/Candle-Off.png';

  // show scary image
  scaryImage.style.display = 'block';

  // play scream
  try {
    scarySound.currentTime = 0;
    scarySound.play();
  } catch (e) {}

  // try full screen for extra scare (will only work on user gesture)
  if (document.fullscreenEnabled) {
    document.documentElement.requestFullscreen().catch(() => {});
  }
}