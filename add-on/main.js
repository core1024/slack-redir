var linkPattern = 'a[href^="https://slack-redir.net/link?url="]';
var element = document.getElementById('col_messages');

function fixLink(link) {
	link.href = decodeURIComponent(link.href.substr(link.href.indexOf('url=')+4).split('&').shift());
	link.innerText += " \uD83D\uDD17";
	link.removeAttribute('onclick');
	link.parentNode.replaceChild(link.cloneNode(true), link);
}

var observer = new MutationObserver(function(mList) {
	for(let mut of mList) {
		if(mut.type === "attributes" && mut.target.href.substr(0, 33) === "https://slack-redir.net/link?url=") {
			fixLink(mut.target);
		}
		if(mut.type === "childList" && mut.addedNodes.length > 0 ) {
			mut.target.querySelectorAll(linkPattern).forEach(fixLink);
		}
	}
});
observer.observe(element, {
	childList: true,
	subtree: true,
	attributes: true,
	attributeFilter: ['href']
});

element.querySelectorAll(linkPattern).forEach(fixLink);

