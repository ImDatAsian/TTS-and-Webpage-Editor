textColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setTextColor,
    });
  });
  
  function setTextColor() {
    chrome.storage.sync.get("textColor", ({ textColor }) => {
      document.body.style.color = textColor;
    });
  }