chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason !== chrome.runtime.OnInstalledReason.INSTALL) {
    return;
  }
  chrome.tabs.create({
    url: "https://magicboxpremium.com/extension/tw/index.html",
  });
});
