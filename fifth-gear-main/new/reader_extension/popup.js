document.getElementById('readFileButton').addEventListener('click', function() {
  const fileUrl = chrome.runtime.getURL('abc.txt');

  fetch(fileUrl)
    .then(response => response.text())
    .then(content => {
      // Split the content into an array based on newline characters
      const arr = content.split('\n').filter(Boolean);

      // Remove '\r' from each element in the array
      const cleanedArr = arr.map(element => element.replace('\r', ''));

      // Display the cleaned array in the console
      console.log(cleanedArr);

      // Display the cleaned array in the paragraph tag
      document.getElementById('fileContent').textContent = cleanedArr.join(', ');
    })
    .catch(error => {
      console.error('Error reading file:', error);
      document.getElementById('fileContent').textContent = 'Error reading file.';
    });
});
