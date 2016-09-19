var assert = require('chai').assert;
var smiley = require("../../js/smiley").smiley;

describe("smiley", function() {
  it("should return a random smile", function() {
    assert.include([":)", ":D", ";)"],smiley(""));
  });
});
