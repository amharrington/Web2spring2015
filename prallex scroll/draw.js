


$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

/*video insert*/

$(".scrolling").scrollFlight();

$("h1").on("arrived",function(e) {
  $(this).addClass("on-page");
});


$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("appeared");
});

