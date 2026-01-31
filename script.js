// script.js - controls intro and final rickroll reveal

const startBtn = document.getElementById('startBtn');
const countdown = document.getElementById('countdown');
const animation = document.getElementById('animation');
const rickModal = document.getElementById('rickModal');
const rickIframe = document.getElementById('rickIframe');
const clickOverlay = document.getElementById('clickOverlay');
const closeBtn = document.getElementById('closeBtn');

let sequenceRunning = false;

// YouTube video id for the classic rickroll
const YT_ID = 'dQw4w9WgXcQ';

// Start the little sequence
startBtn.addEventListener('click', async () => {
  if (sequenceRunning) return;
  sequenceRunning = true;
  startBtn.disabled = true;
  // brief staged messages
  countdown.textContent = 'Playing the intro...';
  await delay(1200);
  countdown.textContent = 'Just a moment...';
  animation.classList.add('active');
  await delay(3000);
  countdown.textContent = 'Almost there...';
  await delay(3000);
  countdown.textContent = 'Surprise incoming!';
  await delay(1200);
  showRickroll();
});

function delay(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }

function showRickroll(){
  // open modal
  rickModal.setAttribute('aria-hidden','false');

  // set iframe src only now — adding autoplay param. Browsers may block autoplay;
  // if so the click overlay invites the user to click to start playback.
  // we still attempt autoplay because in many contexts (user interaction) it will play.
  const autoplaySrc = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1`;
  rickIframe.src = autoplaySrc;

  // overlay will be visible; clicking it will set focus to iframe and remove overlay
  clickOverlay.addEventListener('click', onClickPlayOnce, { once: true });
  // also remove overlay automatically after a short time in case autoplay succeeded
  setTimeout(()=> {
    clickOverlay.style.opacity = '0.0';
    clickOverlay.style.pointerEvents = 'none';
  }, 2500);
}

function onClickPlayOnce(){
  // re-set src with autoplay to encourage playback
  rickIframe.src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1`;
  clickOverlay.style.opacity = '0';
  clickOverlay.style.pointerEvents = 'none';
}

closeBtn.addEventListener('click', () => {
  rickModal.setAttribute('aria-hidden','true');
  // stop playback by clearing src
  rickIframe.src = '';
  startBtn.disabled = false;
  sequenceRunning = false;
});
