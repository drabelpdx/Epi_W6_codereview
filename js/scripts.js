var findReplace = function(sentence, word1, word2) {
  var sentenceLower = sentence.toLowerCase();
  var myArr = sentenceLower.split(" ");
  var searchWord = word1.toLowerCase();
  var replaceWord = word2.toLowerCase();

  for (var i = -1; i < myArr.length; i++) {
  myArr[myArr.indexOf(searchWord)] = replaceWord;
  }

  var first = myArr.shift();
  var letters = first.split("");
  var letter = letters.shift();
  var upper = letter.toUpperCase();
  letters.unshift(upper);
  var capital = letters.join("")
  myArr.unshift(capital);
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
