
// Carousel

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        responsive: {
          1751: {
            margin: 488
          },

          1560: {
            margin: 200
          },

          1400: {
            margin: 300
          },

          1200: {
            margin: 500
          },

          950: {
            margin: 400,
            items: 3
          },

          770: {
            margin: 160,
            items: 2
          },

          480: {
            margin: 320,
            items: 2
          },

          0: {
            margin: 220,
            items: 2
          },

        }
        
    });
});




// находим элементы
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector(".video-preview");
const videoWrapper = document.querySelector(".video");
const video = document.querySelector("#video-file");

// добавляем действие по клику
videoBtn.addEventListener('click', function () {
    // убираем класс по клику
  videoWrapper.classList.remove("video-overlay");
//   добавляем класс по клику
  videoPicture.classList.add("none");
  videoBtn.classList.add("none");

//   запускаем видео, если оно на паузе, по клику
  if(video.paused) {
    video.play()
  }
});

// останавлиаем видео по клику
video.addEventListener('click', function () {
    if(video.paused) {
        video.play()
      }
      else{
        videoBtn.classList.remove("none");
        videoWrapper.classList.add("video-overlay");
        video.pause ()
        }  
  });


// Burger

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

$(function() {
  $('#burger').click(function(){
      $(this).toggleClass('open');
  });
});


burger.onclick = function () {
  nav.classList.toggle('nav-mobile')
  document.body.classList.toggle('no-scroll')
}



