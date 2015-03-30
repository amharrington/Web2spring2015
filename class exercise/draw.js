function addImage(caption,likes,image) {
 var $container = $("div.container");
 var $div = $("<div>").addClass("person");
 var $caption = $("<h4>").text(caption);
 var $likes = $("<h5>").text(likes);
 var $image = $("<img>").attr("src",image);
 
$div.append($caption).append($likes).append($image);

$container.append($div);
}


function drawImages(data) {
	
for(var i = 0; i < data.data.length; i++) {
   var item = data.data[i];
	console.log(item);
	var caption = item.caption && item.caption.text;
	console.log(caption);
	var likes = item.likes.count;
	console.log(likes);
	var image = item.images.standard_resolution.url;

addImage(caption, likes, image);

}

}


