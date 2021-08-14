chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		downloadLinkTitle()
	}
});

const downloadLinkTitle = () => {

	let aTags = document.querySelectorAll('#post-list > li > a')
	let text = ''

	for (a of aTags){
		text += a.innerText + '\n'
	}

	console.log(text)
	let blob = new Blob([text], {type: 'text/plain'})
	let link = document.createElement('a')
	link.href = URL.createObjectURL(blob)
	link.download = 'title-list.txt'
	link.click()
	
}
