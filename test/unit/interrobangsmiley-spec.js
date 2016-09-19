var assert = require('chai').assert;

var question = require("../../js/question").question;
var exclaim = require("../../js/exclaim").exclaim;
var smiley = require("../../js/smiley").smiley;
var interrobangsmiley = require("../../js/interrobangsmiley").interrobangsmiley;

describe("interrobangsmiley", function() {
  it("should add two question marks and an exclamation mark to passed string", function() {
    if (smiley === ":)") assert.equal(interrobangsmiley(smiley, exclaim, question, "hello"), "hello??!:)");
  });
});
