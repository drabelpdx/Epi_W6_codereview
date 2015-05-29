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

$(document).ready(function() {
  $("form#findreplace").submit(function(event) {
    var sentence = $("input#sentence").val();
    var word1 = $("input#word1").val();
    var word2 = $("input#word2").val();
    var result = findReplace(sentence, word1, word2);

    $(".sentence").html(sentence);
    $(".word").html(word1);
    $(".word2").html(word2);
    $(".find").html(result);

    $("#result").show();
    event.preventDefault();
  });
});
