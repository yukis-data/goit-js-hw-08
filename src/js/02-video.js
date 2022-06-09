import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpdateOnLocalStorage, 1000));

function timeUpdateOnLocalStorage(evt) {
  localStorage.setItem(STORAGE_KEY, evt.seconds);
}

if (localStorage.getItem(STORAGE_KEY)) {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}