describe('findReplace', function() {

  it("finds and returns a word from a string", function() {
    expect(findReplace("phrase", "phrase", "phrase")).to.equal("phrase");
  });

  it("finds and replaces a word from a string", function() {
    expect(findReplace("This is my phrase", "phrase", "sentence")).to.equal("This is my sentence");
  });

  it("finds and replaces a word from a string regardless to case", function() {
    expect(findReplace("This is my phrase", "PHRASE", "SENTENCE")).to.equal("This is my sentence");
  });

});
