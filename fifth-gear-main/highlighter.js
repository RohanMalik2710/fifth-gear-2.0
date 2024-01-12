// highlighter.js
var words = ['abhishek', 'sahil']; // words from your .tsv file
var bodyText = document.body.innerHTML;

for (var i = 0; i < words.length; i++) {
  var index = bodyText.indexOf(words[i]);
  if (index >= 0) {
    bodyText = bodyText.substring(0, index) +
      '<mark>' + words[i] + '</mark>' +
      bodyText.substring(index + words[i].length);
  }
}

document.body.innerHTML = bodyText;