import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const localStorageKey = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const timeUpdate = throttle(data => {
  localStorage.setItem(localStorageKey, data.seconds);
}, 1000);

player.on('timeupdate', timeUpdate);

player
  .setCurrentTime(localStorage.getItem(localStorageKey))
  .catch(function (error) {
    console.log(error);
  });
