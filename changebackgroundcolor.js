bgColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setbgColor,
    });
  });
  
  function setbgColor() {
    chrome.storage.sync.get("bgColor", ({ bgColor }) => {
      document.body.style.backgroundColor = bgColor;
    });
  }