	var box = document.getElementsByClassName('boxes');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var arr = Array.prototype.slice.call(box);
	arr.map(function(value, index, arr) {
	    value.addEventListener('click', function() {
	        value.style.maxHeight = "700px";
	        value.style.maxWidth = "1000px";
	        value.style.transition = "max-height ease-in 1s";
	        value.style.transition = "max-width ease-in 1s";
	        value.style.marginLeft = "auto";
	        value.style.marginRight = "auto";
	        left.style.display = "block";
	        right.style.display = "block";
	    }, false);
	});