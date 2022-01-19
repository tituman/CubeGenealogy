	window.onload = function (){
	// register the callback function to all nodes, makes them clickable	
	var theDivDescription = document.getElementById('theDivDescription');
		var allNodes = document.getElementsByClassName('node');
		for (let elem of allNodes) {
			//remove * stars from names (ref to other subgroup)
			let sname = elem.textContent.replace('\*','');
		  if (elem !== null) {
			elem.classList.remove("default");
			elem.classList.add("clickable");
			elem.setAttribute('title', strainDB[sname]);
			elem.addEventListener('click',function (){callback(elem.textContent);},false);
		  }
		}
	}
	var descVisible = false;
	//actual callback function, looks in the DB for the description
	var remCallback = function (nodename) {
		var clickableclasses = document.getElementsByClassName('clickable');
		var iframe = document.getElementById("theDescription");
		var html = "";
		var strippedID = "";
		if (!descVisible){
			for (let item of clickableclasses) {
				strippedID = item.id.replace('flowchart-','');
				if (strippedID.indexOf(nodename) == 0) { // nodename matches at the beginning of string. fixes problem of "TAT" being found in "Wombat_TAT"
					console.log('nodename: ' + nodename + ', strippedID: ' + strippedID + ', title: ' + item.getAttribute('title'));
					html = '<body>'+item.getAttribute('title')+'</body>';
					iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
					descVisible = true;
					document.getElementById('theDivDescription').style.display = "block";
					break;
				}
			}
		}
		else {
			html = "";
			iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
			descVisible = false;
			theDivDescription.style.display = "none";
		}
    }

