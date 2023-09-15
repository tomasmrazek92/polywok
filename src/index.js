// --- Nav
let navOpen = false;
let scrollPosition;
$('.nav_button').on('click', function () {
  if (!navOpen) {
    scrollPosition = $(window).scrollTop();
    $('html, body').scrollTop(0).addClass('overflow-hidden');
    navOpen = true;
  } else {
    $('html, body').scrollTop(scrollPosition).removeClass('overflow-hidden');
    navOpen = false;
  }
});
