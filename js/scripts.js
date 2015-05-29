var findReplace = function(sentence, word1, word2) {
  var myArr = sentence.split(" ");
  var searchWord = word1;
  var replaceWord = word2;

  myArr[myArr.indexOf(searchWord)] = replaceWord;
  var fixed = myArr.join(" ");

  return fixed;

};
