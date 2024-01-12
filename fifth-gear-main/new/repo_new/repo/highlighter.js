chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    const words = ["only", "highlight", "words"]; // Update this array with your words from file1.js

    if (request.highlight !== undefined) {
      const bodyText = document.body.innerHTML;

      for (let i = 0; i < words.length; i++) {
        const regex = new RegExp(words[i], 'gi');
        document.body.innerHTML = request.highlight ?
          bodyText.replace(regex, function (match) {
            return '<mark>' + match + '</mark>';
          }) :
          bodyText.replace(/<\/?mark>/g, ''); // Remove <mark> tags
      }
    }
  }
);
