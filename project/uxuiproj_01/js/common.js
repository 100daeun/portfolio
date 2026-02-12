//gnb
$(".depth2").hide();

$(".gnb > li").mouseenter(function () {
  $(".depth2").stop().slideDown(300);
  $(".depth2_bg").stop().slideDown(300);
  $(".depth2_black_bg").stop().fadeIn(300);
});

$("#header").mouseleave(function () {
  $(".depth2_black_bg").stop().fadeOut(300);
  $(".depth2").stop().slideUp(300);
  $(".depth2_bg").stop().slideUp(300);
});

$(document).ready(function () {
  var currentPath = window.location.pathname;

  $('#header .gnb > li').each(function () {
    var linkHref = $(this).find('> a').attr('href');

    if (linkHref && currentPath.includes(linkHref.split('/').pop())) {
      $(this).addClass('active');
    }
  });
});


//btn_sitemap
$(document).ready(function () {
  $(".btn_sitemap").click(function () {
    toggleMenu();
  });

  $(".mgnb li a").click(function () {
    toggleMenu();
  });

  function toggleMenu() {
    $("body").toggleClass("hidden");
    $(".mgnb_wrap").fadeToggle();
    $(".btn_sitemap").toggleClass("active");

    if ($(".btn_sitemap").hasClass("active")) {
      $(".btn_sitemap").text("메뉴닫기");
    } else {
      $(".btn_sitemap").text("메뉴열기");
    }
  }
});


//scroll
$(window).scroll(function () {
  let scrollPosition = $(this).scrollTop();
  console.log(scrollPosition);

  if (scrollPosition > 100) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});

$(".gotop").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 500);
});