const express = require('express');
// Initialise Express
var app = express();
const http = require( 'http' ).createServer( app );
const io = require( 'socket.io' )( http );

// Render static files
app.use(express.static('public'));

app.get( '/', function( req, res ) {
    console.log('inside slash');
    res.sendFile( __dirname + '/public/index.html' );
});

const port = process.env.PORT || 8080;
// Port website will run on
http.listen(port, function(){
    console.log('port connected on ', port);
});

io.on( 'connection', function( socket ) {
    console.log( 'a user has connected!' );
    socket.on( 'disconnect', function() {
        console.log( 'user disconnected' );
    });
    socket.on('position', function(ath, atv) {
        console.log('Client position update: ', ath, atv);
        // Broadcast position update to all other clients
        io.emit('position', ath, atv);
    });
    /*socket.on('change_color', function(cubefound, chosen_color){
        console.log('client cube ', cubefound, chosen_color);
        io.emit('change_color', cubefound, chosen_color);
    });*/
    /*socket.on( 'cube-location-parameters', function( arg1, arg2, arg3, arg4, arg5, arg6 ) {
        //console.log( 'arg1 '+ JSON.stringify(arg1) );
        //console.log('argprop '+ JSON.stringify(arg2) );
        //console.log(arg1.properties);
        console.log( 'arg3 '+ arg3.x + arg3.y );
        //console.log( 'arg3 '+ arg3 );
        arg1.properties = arg2;
        arg1.position = arg4;
        arg1.rotation = arg5;
        arg1.scale = arg6;
        console.log('argprops '+ arg1.properties);
        console.log('argposs '+ arg1.position);
        console.log('argrot '+ arg1.rotation);
        console.log('argscale '+ arg1.scale);
        console.log('argpr1 '+ JSON.stringify(arg1) );
        //xcoord = arg2;
        //ycoord = arg3;
        io.emit('sync-cube-location-parameters', arg1, arg2);
    });*/
    
});