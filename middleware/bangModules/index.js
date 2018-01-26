
const bangs = require('./bangs.js');

function bangModules(message){
	const content = message.content.toLocaleLowerCase();
	//Check if string starts with bang
	if (content.indexOf("!") == 0 && message.author.username !== "AlexBot") {
			//Get the first word and remove the bang
			var str = content.split(" ");
			var func = str[0];
			func = func.substring(1);
			//Check to see if bang is a function inside bangs.js
			if(Object.keys(bangs).indexOf(func) != -1){
				//call that function with the original message
				bangs[func](message);
			}
	}
}

module.exports = bangModules;