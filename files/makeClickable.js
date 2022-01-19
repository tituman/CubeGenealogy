	window.onload = function (){
		
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
	var remCallback = function (nodename) {
		var clickableclasses = document.getElementsByClassName('clickable');
		var iframe = document.getElementById("theDescription");
		var html = "";
		if (!descVisible){
			for (let item of clickableclasses) {
				if (item.id.includes(nodename)) {
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

