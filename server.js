var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('./');

var server = http.createServer(function (req, res) {
  var done = finalhandler(req, res);
  serve(req, res, done);
})
var io = require('socket.io')(server);

server.listen(3000, function(req, res) {
  console.log('Server started');
});

io.on('connection', function (socket) {

  // Listen for events from mobile
  socket.on('prev', function (data) {
    io.emit('prev', data);
    // console.log('Prev button clicked', data);
  });
  socket.on('next', function (data) {
    io.emit('next', data)
    // console.log('Next button clicked', data);
  });
});

