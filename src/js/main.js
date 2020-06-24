
// -------------burger----------------------
$(Document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active"),
    $(".menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

// ==========ibg=========
function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
    }
  });
}

ibg();
