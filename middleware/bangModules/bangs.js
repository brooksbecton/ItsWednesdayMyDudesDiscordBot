
module.exports = {
	flip: function(message) {
		const content = message.content.toLocaleLowerCase();
		var result = '';
		var res = Math.floor(Math.random()*2);
		
		if(res == 0){
			result = "Heads!";
		} else {
			result = "Tails!";
		}
		
		message.reply(result);
	},
	gif: function(message) {
		const giphy = require('giphy-api-without-credentials')();
		
		const content = message.content.toLocaleLowerCase();
		//Split string into tags
		var str = (content.split(" ").length - 1);
		
		//Only need one tag
		if(str <= 1){
			str = content.substr(content.indexOf(' ')+1);
			
			if(str != '!gif'){ 
				//Get random Gif from tag 'str', send response url to discord
				giphy.random(str, function(err, res) {
					message.reply(res.data.image_url);
				});
			} else {
				message.reply("Please provide a gif tag");
			}
			
		} else {
			message.reply("Please provide only one tag for !gif");
		}	
		
	}
	
	
}