//banner
function resetTextAnimation(slideEl) {
  if (!slideEl) return;
  const text = slideEl.querySelector('.banner_txt dl');
  const btn = slideEl.querySelector('.banner_txt .btn_move');
  if (text) text.classList.remove('animate-text');
  if (btn) btn.classList.remove('animate-text');
}

function animateText(slideEl) {
  if (!slideEl) return;
  const text = slideEl.querySelector('.banner_txt dl');
  const btn = slideEl.querySelector('.banner_txt .btn_move');

  if (!text && !btn) return;

  resetTextAnimation(slideEl);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (text) text.classList.add('animate-text');
      if (btn) btn.classList.add('animate-text');
    });
  });
}

function updateTimerBar(time, total) {
  const progressFill = document.getElementById('progressFill');
  if (!progressFill) return;

  const progress = (1 - (time / total)) * 100;

  progressFill.style.transition = 'none';
  progressFill.style.width = `${progress}%`;
}

function resetProgressBar() {
  const progressFill = document.getElementById('progressFill');
  if (progressFill) {
    progressFill.style.transition = 'none';
    progressFill.style.width = '0%';
  }
}

const banner_list = new Swiper(".banner_list", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  on: {
    init: function (swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      animateText(activeSlide);
      resetProgressBar();
    },

    slideChangeTransitionStart: function (swiper) {
      swiper.slides.forEach(slide => {
        resetTextAnimation(slide);
      });
      resetProgressBar();
    },

    slideChangeTransitionEnd: function (swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      animateText(activeSlide);
    },

    autoplayTimeLeft(swiper, time) {
      updateTimerBar(time, swiper.params.autoplay.delay);
    },

    autoplayStart: function () {
      resetProgressBar();
    }
  }
});

const pauseBtn = document.querySelector('.pause');
const playBtn = document.querySelector('.play');

if (pauseBtn) {
  pauseBtn.addEventListener('click', function () {
    banner_list.autoplay.stop();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'block';
  });
}

if (playBtn) {
  playBtn.addEventListener('click', function () {
    banner_list.autoplay.start();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
  });
}

//aos
AOS.init({
  duration: 1500,
  once: true,
});

//prd
const $cards = $(".card_container");

$cards.on("click", function (e) {
  const $this = $(this);

  if (window.innerWidth > 1023) {
    return;
  }
  if (!$(e.target).is("a, button")) {
    e.preventDefault();
    $this.toggleClass('flipped');
  }
});

//review
const review_item_list = new Swiper(".review_item_list", {
  pagination: {
    el: '.swiper-pagination',
    type: "bullets",
  },
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});