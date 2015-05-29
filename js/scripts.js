var findReplace = function(sentence, word1, word2) {
  var first = sentence.split(" ");
  var sentenceLower = sentence.toLowerCase();
  var myArr = sentenceLower.split(" ");
  var searchWord = word1.toLowerCase();
  var replaceWord = word2.toLowerCase();

  myArr[myArr.indexOf(searchWord)] = replaceWord;
  var firstWord = first.shift();
  var lose = myArr.shift();
  myArr.unshift(firstWord);
  var fixed = myArr.join(" ");

  return fixed;

};
