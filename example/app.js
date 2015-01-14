var screenshotdetection = require('de.marcelpociot.screenshot');
screenshotdetection.addEventListener("screenshotTaken",function(e)
{
	alert( "Screenshot taken!" );
});
// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
win.open();