// ============== step 1 - імпортувала - активувала бібліотеки на своїй сторінці
const trottle = require('lodash.throttle');
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
// =================== step 2 - записую час в локальну пам'ять
function onPlay(event) {
  try {
    const currentTime = event.seconds;
    const KEY = 'videoplayer-current-time';
    localStorage.setItem(KEY, currentTime);
  } catch (error) {
    console.error('Error:-', error);
  }
}
// ================ trottle
player.on('timeupdate', trottle(onPlay, 1000));

// // ====================================== step 3 - має вітворити відео з часу яке записалось в локальну пам'ять

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
