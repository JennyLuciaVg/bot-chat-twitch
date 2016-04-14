var tmi = require('tmi.js');

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws",
        reconnect: true
    },
    indentity: {
        username: "Akashiya11",
        password: "oauth:145hrgo147woakoi64cnleg1n26dxu"
    },
    channels: ["channel_1"],
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self){
    if(message === "!twitter"){
        client.action("channel_1", ":");
    }
    client.action("channel_1", user['display-name'] + "Hello again!");
});

client.on('connected', function(address,port){
    //console.log("Address: "+address+" Port: "+port);
    client.action("channel_1", "Hello I'm a bot!");
});