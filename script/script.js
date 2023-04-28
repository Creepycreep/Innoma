document.addEventListener('DOMContentLoaded', () => {
  let play = document.querySelector('.btn_play'),
    video = document.querySelector('#video'),
    open = document.querySelector('.programs');

  play.addEventListener('click', () => {
    play.parentElement.style.display = "none";
    video.play();
  });

  video.addEventListener('click', () => {
    video.pause();
    play.parentElement.style.display = "block";
  });

  open.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-svg')) {
      e.target.classList.toggle('btn-svg_open');
    } else if (e.target.parentElement.classList.contains('btn-svg')) {
      e.target.parentElement.classList.toggle('btn-svg_open');
    }
  });


  let width = 230 + 30,
    count = 4,
    position = 0,
    experts = document.querySelector('.experts-wrapper'),
    slides = document.querySelectorAll('.experts-card'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

  next.addEventListener('click', () => {
    position -= width;
    position = Math.max(position, -width * (slides.length - count));

    experts.style.marginLeft = position + 'px';
  })

  prev.addEventListener('click', () => {
    position += width;

    position = Math.min(position, 0);
    experts.style.marginLeft = position + 'px';

  })
});