var element = document.getElementById('col_messages');

function fixLink(link) {
	link.href = decodeURIComponent(link.href.substr(link.href.indexOf('url=')+4).split('&').pop());
}

var observer = new MutationObserver(function(mList) {
	for(let mut of mList) {
		if(mut.type !== "childList" || mut.addedNodes.length === 0 ) {
			continue;
		}
		for(let link of mut.target.querySelectorAll('a[href^="https://slack-redir.net/link?url="]')) {
			fixLink(link);
		}
	}
});
observer.observe(element, {childList: true, subtree: true });