describe('findReplace', function() {

  it("finds and returns a word from a string", function() {
    expect(findReplace("This is my phrase", "phrase", "sentence")).to.equal("phrase");
  });
});
