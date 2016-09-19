"use strict";

(function(exports) {
  var OPTIONS = [":)", ":D", ";)"];
  var SMILEY = OPTIONS[Math.floor(Math.random()*OPTIONS.length)]

  function smiley(string) {
    return string + SMILEY;
  }

  exports.smiley = smiley;
})(this);
