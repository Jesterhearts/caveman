function do_minify() {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "minify"});
   });
}

chrome.browserAction.onClicked.addListener(function(tab) {
   do_minify();
});

