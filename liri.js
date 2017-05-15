var Twitter = require('twitter');
var keys = require('./keys.js').twitterKeys;

var command = process.argv[2];

if(command === "my-tweets") {
var client = new Twitter(keys);
    var params = {user_id: 2878572432, count:20}; 
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
             for (var i = 0; i < tweets.length; i++){
                  console.log("");
                  console.log(JSON.stringify(tweets[i].created_at, null, 2));
                  console.log(JSON.stringify(tweets[i].text, null, 2));
             }
        }
        else {
            console.log(error);
        }
    }); 
}

// Gives user a list of executable commands
else {
    console.log("");
    console.log("This is the list of available commands:");
    console.log("");
    console.log("node liri.js my-tweets - this will show your last 20 tweets and when they were created at in your terminal/bash window");
    console.log("");
    console.log("node liri.js spotify-this-song '<song name here>' - this will show the following information about the song in your terminal/bash window");
    console.log("");
    console.log("node liri.js movie-this '<movie name here>' - this will output the movie information to your terminal/bash window:");
    console.log("");
    console.log("node liri.js do-what-it-says - this will execute any command that contains in random.txt file");
}






