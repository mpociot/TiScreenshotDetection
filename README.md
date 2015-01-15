#TiScreenshotDetection

[![gittio](http://img.shields.io/badge/gittio-1.0.0-00B4CC.svg)](http://gitt.io/component/de.marcelpociot.screenshot)
[![License](http://img.shields.io/badge/license-MIT-orange.svg)](http://mit-license.org)
[![issues](http://img.shields.io/github/issues/mpociot/TiScreenshotDetection.svg)](https://github.com/mpociot/TiScreenshotDetection/issues)

## Overview

Detect when someone takes a screenshot in your iOS app.

### Important info ###

Due to an iOS restriction this module only triggeres an event **after** the screenshot was taken! It is no longer possible to prevent iOS from taking a screenshot!

## Installation
### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/de.marcelpociot.screenshot)
Download the latest distribution ZIP-file and consult the [Titanium Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module) on how install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install de.marcelpociot.screenshot`

## Usage
```javascript
var screenshotdetection = require('de.marcelpociot.screenshot');
screenshotdetection.addEventListener("screenshotTaken",function(e)
{
	alert( "Screenshot taken!" );
});
```
