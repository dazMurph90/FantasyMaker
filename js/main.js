goog.require('initCanvas')
goog.require('canvasEvents')
goog.require('ui')
goog.require('pageOverlay')

console.log("Enter main.js version 0.5.0")

// Commands to run only once on page load 

// Fallback in case <dialog> tag is not supported by browser
var dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);
