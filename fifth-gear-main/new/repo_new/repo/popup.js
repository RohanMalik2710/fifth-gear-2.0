let isHighlightOn = false;

function updateButton() {
  const button = document.getElementById('toggleButton');
  button.innerText = isHighlightOn ? 'Turn Off Highlight' : 'Turn On Highlight';
}

document.addEventListener('DOMContentLoaded', function () {
  updateButton();

  document.getElementById('toggleButton').addEventListener('click', function () {
    isHighlightOn = !isHighlightOn;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { highlight: isHighlightOn });
    });

    updateButton();
  });
});
