
$(document).ready(function(){
	
	var url="https://santapanminda.com/api.php?format=json";
	var quote =$("#quote");

	$.get(url,function(data){


		var new_quote=JSON.parse(data);
		

		
		quote.text(new_quote.posts[0].post.content);
	

	});



});

