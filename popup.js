// Called when the user clicks on the browser action.
var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
		alert("works!!");
});