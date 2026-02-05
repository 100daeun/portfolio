//mgnb
$(window).resize(function () {
  if ($(window).width() <= 753) {
    $(".sitemap").show();
    $("nav .gnb").hide();
  } else {
    $(".sitemap").hide();
    $("nav .gnb").show();
    $("#header").removeClass("active");
    $("body").removeClass("noscroll");
  }
}).resize();

$('.gnb a').on('click', function (e) {
  e.preventDefault();
  const target = $(this).attr('href');
  const targetPosition = $(target).offset().top;

  lenis.scrollTo(targetPosition, {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  });
});


$(".sitemap").click(function () {
  if ($(".mgnb_wrap").is(":visible")) {
    $(".mgnb_wrap").slideUp(500, function () {
      $("#header").removeClass("active");
    });
    $("body").removeClass("noscroll");
    lenis.start();
  } else {
    $(".mgnb_wrap").slideDown(500);
    $("#header").addClass("active");
    $("body").addClass("noscroll");
    lenis.stop();
  }
});


//모바일 메뉴 클릭
$(".mgnb li a").click(function (e) {
  e.preventDefault();
  const target = $(this).attr("href");

  //메뉴 닫기
  $("#header").removeClass("active");
  $("#check-icon").prop("checked", false);

  const targetPosition = $(target).offset().top;

  $(".mgnb_wrap").slideUp(300, function () {
    $("body").removeClass("noscroll");
    lenis.start(); // Lenis 재시작

    lenis.scrollTo(targetPosition, {
      duration: 1.2,
      offset: 0
    });
  });
});

//로고 클릭
$("#header h1 a").click(function (e) {
  if ($(".mgnb_wrap").is(":visible")) {
    e.preventDefault();
    const target = $(this).attr("href");

    $(".mgnb_wrap").slideUp(500, function () {
      $("#header").removeClass("active");
      $("body").removeClass("noscroll");
      $("#check-icon").prop("checked", false);
      window.location.href = target;
    });
  }
});


// gotop 버튼 색상 변경
$(window).on('scroll', function () {
  const scroll = $(window).scrollTop();
  const gotopBtn = $('.gotop_btn');

  if (scroll > 200) {
    gotopBtn.addClass('show');
  } else {
    gotopBtn.removeClass('show');
  }

  // 흰색 배경 섹션 확인
  const whiteSections = $('.career, #footer'); // 흰 배경 섹션들
  let isOnWhite = false;

  whiteSections.each(function () {
    const sectionTop = $(this).offset().top;
    const sectionBottom = sectionTop + $(this).outerHeight();
    const btnPosition = scroll + $(window).height() - 116; // 버튼 위치

    if (btnPosition >= sectionTop && btnPosition <= sectionBottom) {
      isOnWhite = true;
      return false; // break
    }
  });

  if (isOnWhite) {
    gotopBtn.addClass('on-light');
  } else {
    gotopBtn.removeClass('on-light');
  }
});

// gotop 클릭 이벤트
$('.gotop_btn').on('click', function () {
  lenis.scrollTo(0, {
    duration: 1.2
  });
});