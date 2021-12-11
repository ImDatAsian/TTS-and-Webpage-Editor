changeTextColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setTextColor,
    });
  });
  
  
  function setBackgroundColor(){
    document.body.style.backgroundColor = backgroundColor;
  }
  
  
  
  
  
  function setTextColor() {
    chrome.storage.sync.get("textColor", ({ textColor }) => {
      document.body.style.color = textColor;
      
    
  
    });
  }
  changeBackgroundColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setBackgroundColor
    });
  });