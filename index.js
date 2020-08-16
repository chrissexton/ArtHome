function ajax_get(url, callback) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			try {
				var data = JSON.parse(xmlhttp.responseText);
			} catch(err) {
				return callback(err);
			}
			return callback(null, data);
		}
	};

	xmlhttp.open('GET', url, true);
	xmlhttp.send();
}

function setBG() {
	var url = 'https://www.gstatic.com/culturalinstitute/tabext/imax_2_1.json';
	ajax_get(url, function(err, data) {
		if (err) {
			console.log('We\'ve had a problem');
		}
		var photoID = Math.floor((Math.random() * data.length));
		var item = data[photoID];
		if (item.title) document.getElementById('title').text = item.title;
		if (item.creator) document.getElementById('creator').text = item.creator;
		if (item.attribution) document.getElementById('partner').text = item.attribution;
		document.body.style.background = 'url('+item.image+'=s1200) no-repeat center center fixed';
		document.body.style['-webkit-background-size'] = 'cover';
		document.body.style['-moz-background-size'] = 'cover';
		document.body.style['-o-background-size'] = 'cover';
		document.body.style['background-size'] = 'cover';
	});
}

setBG();
