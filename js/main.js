//visual
function adjustTextPath() {
  var width = $(window).width();
  var path = $('#ellipsePath');
  var textPath = $('textPath');

  if (width <= 385) {
    $('textPath').attr('startOffset', '10%');
    path.attr('d', 'M 35, -10 A 220,80 0 0,1 750,100');
  } else if (width <= 465) {
    $('textPath').attr('startOffset', '10%');
    path.attr('d', 'M 45, 10 A 220,80 0 0,1 750,100');
  } else if (width <= 585) {
    $('textPath').attr('startOffset', '8%');
    path.attr('d', 'M 45, -20 A 220,80 0 0,1 750,100');
  } else if (width <= 976) {
    $('textPath').attr('startOffset', '9%');
    path.attr('d', 'M 50, 20 A 220,80 0 0,1 750,100');
  } else if (width <= 1185) {
    $('textPath').attr('startOffset', '19%');
    path.attr('d', 'M 50, 120 A 220,80 0 0,1 750,100');
  } else if (width <= 1385) {
    $('textPath').attr('startOffset', '16%');
    path.attr('d', 'M 55, 90 A 220,80 0 0,1 750,100');
  } else if (width <= 1585) {
    $('textPath').attr('startOffset', '11%');
    path.attr('d', 'M 40, 60 A 220,80 0 0,1 750,100');
  } else {
    $('textPath').attr('startOffset', '9%');
    path.attr('d', 'M 50, 20 A 220,80 0 0,1 750,100');
  }
}

$(document).ready(function () {
  adjustTextPath();
  $(window).resize(adjustTextPath);
});


//visual svg
// data-order 순서대로 정렬
const symbols = gsap.utils.toArray(".symbol").sort((a, b) => {
  return a.dataset.order - b.dataset.order;
});

symbols.forEach((symbol, index) => {
  const tl = gsap.timeline({
    delay: 2 + (index * 0.2)
  });

  tl.from(symbol, {
    y: -500,
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out"
  });

  tl.to(symbol, {
    keyframes: {
      y: [0, 80, -10, 30, 0],
      ease: "none",
      easeEach: "power2.inOut"
    },
    ease: "elastic",
    duration: 5
  });
});


//about
const profile_list = new Swiper(".profile_list", {
  effect: "cards",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
});

const pauseBtn = document.querySelector('.pause');
const playBtn = document.querySelector('.play');

if (pauseBtn) {
  pauseBtn.addEventListener('click', function () {
    profile_list.autoplay.stop();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
  });
}

if (playBtn) {
  playBtn.addEventListener('click', function () {
    profile_list.autoplay.start();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
  });
}


//aos
AOS.init({
  duration: 1800,
  once: true,
});