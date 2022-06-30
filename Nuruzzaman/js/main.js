$(document).ready(function () {
  $(".toggle").click(function () {
    $("#nav").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".home-slider").slick({
    arrows: true,
    // prevArrow:
    //   "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left'></i></button>",
    // nextArrow:
    //   "<button type=s'button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
  });
});
