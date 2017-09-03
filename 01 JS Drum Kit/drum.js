
// create function to play sound 
function playSound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return; //stop the function from running 
    //rewind audio to beginning
    audio.currentTime = 0;
    //play audio
    audio.play();
  
    //add class on div to animate
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    if (e.propertyName != 'transform') return; // skip the trabsition if not transform
      this.classList.remove('playing');
  }
  
  //create and event listener to remove playing class
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  // event listener is added on page for key-press  
    window.addEventListener('keydown', playSound);