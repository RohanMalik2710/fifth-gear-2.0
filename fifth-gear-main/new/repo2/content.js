chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "highlight") {
      var words = ["hurry", "only"];
      var bodyText = document.body.innerHTML;
  
      for (var i = 0; i < words.length; i++) {
        var regex = new RegExp(words[i], 'gi');
        bodyText = bodyText.replace(regex, function(match) {
          return '<mark>' + match + '</mark>';
        });
      }
  
      document.body.innerHTML = bodyText;
    }
  });
  