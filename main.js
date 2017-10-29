if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      console.log('SW registered');
    });
}

const keys = document.querySelectorAll('.key');

const soundPlay = (e) => {
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!sound) return;
    
    sound.currentTime = 0;
    sound.play();
    
    key.classList.add('playing');
}

const removeStyle = (e) => {
    e.target.classList.remove('playing');
}

window.addEventListener('keydown', soundPlay);

keys.forEach(key=>addEventListener('transitionend', removeStyle));