"use strict";

(function(exports) {
  function interrobangsmiley(question, exclaim, smiley, string) {
    return question(exclaim(smiley(string)));
  };

  exports.interrobangsmiley = interrobangsmiley;
})(this);
