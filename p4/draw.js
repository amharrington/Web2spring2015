
function addImage(name,likes,image) {
 var $container = $("div.container");
 var $div = $("<div>").addClass("person");
 var $image = $("<img>").attr("src",image);
 var $name = $("<h1>").text(name);
 var $likes = $("<h3>").text(likes);
 

$($likes).css({
	"position":"relative",
	"left":"70px"
});

$div.append($image).append($name).append($likes);

$container.append($div);
}


addImage("منشن الي تبيه يشوف المقطع", "720", "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055772_1558157594448054_879696703_n.jpg",
        "https://instagram.com/p/0lOFZ0g8gA/");
addImage("RCF x VFS2 - pic via @kdot_vossen #FreeBuju #Vossen #CarsWithoutLimits","432", "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055442_1387234548264057_209258360_n.jpg",
         "https://instagram.com/p/0lS-LWTbw9/");
addImage("Сегодня была на прекрасном мероприятии #soundkids","543", "http://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/10919675_944043618953681_1961747465_n.jpg",
       "https://instagram.com/p/0lTX-pqkcC/");
addImage("Are your tubes in good shape?","344", "http://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s150x150/e15/11055616_1568588500090432_546823562_n.jpg",
        "https://instagram.com/p/0lNgG4st5V/");

    
