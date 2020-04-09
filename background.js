chrome.browserAction.onClicked.addListener(function (tab) {
  var tabUrl = tab.url;
  newUrl = 'http://outline.com/' + tabUrl;
  chrome.tabs.update({ url: newUrl });
});
