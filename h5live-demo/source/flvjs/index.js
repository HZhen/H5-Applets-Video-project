var flvjs = window.flvjs
if (flvjs.isSupported()) {
  var videoElement = document.getElementById('videoElement');
  var flvPlayer = flvjs.createPlayer({
      type: 'flv',
      url: '' // url为flv的直播源地址
  });
  flvPlayer.attachMediaElement(videoElement);
  flvPlayer.load();
  flvPlayer.play();
}