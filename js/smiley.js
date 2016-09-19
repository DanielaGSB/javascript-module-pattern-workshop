"use strict";

(function(exports) {
  var OPTIONS = [":)", ":D", ";)"];

  function smiley() {
    return OPTIONS[Math.floor(Math.random()*OPTIONS.length)];
  }

  exports.smiley = smiley;
})(this);
