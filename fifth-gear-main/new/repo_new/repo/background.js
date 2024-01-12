chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'highlighter.js'
  });
});

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.highlight !== undefined) {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { highlight: request.highlight });
      });
    }
  }
);
