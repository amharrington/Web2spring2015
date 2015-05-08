


$(".masthead").scroll(function(){
    if ($("masthead").scrollTop() >= 300) {
       $('h1 span').addClass('fixed-header');
    }
    else {
       $('h1 span').removeClass('fixed-header');
    }
});

$(".scrolling").scrollFlight();

$("h1 span").on("arrived",function(e) {
  $(this).addClass("on-page");
});


$(".iframe-cover").on("arriving",function(e) {
  $(this).addClass("appeared");
});



