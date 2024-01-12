function countKeywords() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0];
      
      // Perform HTTP request to fetch website content
      fetch(activeTab.url)
        .then(response => response.text())
        .then(htmlContent => {
          // Your keyword counting logic here
          // Display the counts in the result div
          document.getElementById('result').innerHTML = `<p>Content fetched successfully!</p>`;
        })
        .catch(error => {
          document.getElementById('result').innerHTML = `<p>Error: ${error.message}</p>`;
        });
    });
  }
document.getElementById('countButton').addEventListener('click', countKeywords);
