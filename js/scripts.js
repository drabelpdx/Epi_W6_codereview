var findReplace = function(sentence, word1, word2) {
  var myArr = sentence.split(" ");
  var searchWord = word1;

  for(var i = 0; i < myArr.length; i +=1) {
    var currentWord = myArr[i];
    if (searchWord === currentWord) {

      var foundIndex = i;
      var found = myArr[foundIndex];
      return found;
    }
  }
};
