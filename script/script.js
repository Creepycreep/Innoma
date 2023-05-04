document.addEventListener('DOMContentLoaded', () => {
  let signIn = document.querySelector('#sign-in'),
    modal = document.querySelector('.main-screen__modal'),
    closeModal = document.querySelector('.modal_close');

  signIn.addEventListener('click', () => {
    modal.classList.remove('main-screen__modal_close')
    modal.classList.add('main-screen__modal_open');
  })

  closeModal.addEventListener('click', () => {
    modal.classList.remove('main-screen__modal_open');
    modal.classList.add('main-screen__modal_close')
  })




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


  let btnMenu = document.querySelector('.btn_menu'),
    menu = document.querySelector('.nav_mobile'),
    body = document.querySelector('body');

  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('btn_menu_active');
    menu.classList.toggle('nav_mobile_active');
    body.classList.toggle('overflow');
  })
});