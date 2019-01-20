chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
    if (info.status === 'complete') {
      if (tab.title.indexOf("Inc. Slack") != -1) {
        var isDisable = tab.url.indexOf("G9M51FKT5") != -1;
        chrome.tabs.sendMessage(tabId, {cmd: "lockDucky", isDisable: isDisable});
      }
    }
});
