// src/background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'DATA') {
    console.log('Received data:', request.data);
    // TODO: Process and store the data
  }
});
