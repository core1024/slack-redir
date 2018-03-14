var linkPattern = 'a[href^="https://slack-redir.net/link?url="]';
var element = document.getElementById('col_messages');

function fixLinks(links) {
	for(let link of links) {
		link.href = decodeURIComponent(link.href.substr(link.href.indexOf('url=')+4).split('&').pop());
	}
}

var observer = new MutationObserver(function(mList) {
	for(let mut of mList) {
		if(mut.type !== "childList" || mut.addedNodes.length === 0 ) {
			continue;
		}
		fixLinks(mut.target.querySelectorAll(linkPattern));
	}
});
observer.observe(element, {childList: true, subtree: true });

fixLinks(element.querySelectorAll(linkPattern));
