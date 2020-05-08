var MetaWear = require('../index')//require('metawear');

// If you know the MAC address, you can uncomment this line
//MetaWear.discoverByAddress('cb:7d:c5:b0:20:8f', function(device) {
MetaWear.discover(function (device) {
  console.log('got em');
  // you can be notified of disconnects
  device.on('disconnect', function () {
    console.log('we got disconnected! :( ');
  });
  // you'll need to call connect and set up
  device.connectAndSetUp(function (error) {
    console.log('were connected!');
    setTimeout(function () {
      device.disconnect(function (error) {
        console.log('disconnect call finished');
      });
    }, 1000);
  });
});
