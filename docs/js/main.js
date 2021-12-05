let mobileNavButton = document.querySelector('.mobile-nav-button');
let mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
let mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function() {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});


let videoBtn = document.querySelector('#video-story-button');
let videoBtnIcon = document.querySelector('#video-story-button-icon');
let videoOverlay = document.querySelector('#story-video-overlay');
let videoFile = document.querySelector('#video-story');


videoBtn.addEventListener('click', function() {
  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden');
    } else {
      videoOverlay.classList.remove('hidden');
    }
  }

  if (videoFile.paused) {
    videoFile.play(); // метод, запускающий видео
    videoBtnIcon.src = "./img/story/pause-white.svg";

    videoOverlay.onmouseleave = toggleOverlay;
    // onmouseleave - чтобы функция сработало только 1 раз
    videoOverlay.onmouseenter = toggleOverlay;

  } else {    
    videoFile.pause();
    videoBtnIcon.src = "./img/story/play-white.svg";
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  } 
});
