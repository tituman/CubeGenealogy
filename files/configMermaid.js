function setFavicons(favImg){
    let headTitle = document.querySelector('head');
    let setFavicon = document.createElement('link');
    setFavicon.setAttribute('rel','shortcut icon');
    setFavicon.setAttribute('href',favImg);
    headTitle.appendChild(setFavicon);
}
setFavicons('files/favicon.png');


var config = {
	startOnLoad:true,
	flowchart:{
		useMaxWidth:true,
		htmlLabels:true,
		//curve:'cardinal',
	},
	securityLevel:'loose',
	'theme' : 'dark'
};

mermaid.initialize(config);