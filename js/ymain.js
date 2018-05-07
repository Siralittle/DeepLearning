var screens = document.querySelectorAll(".screen");
var classNameList = ['', 'pic', 'feelings', 'handwriting'];
Array.prototype.slice.call(screens).map(function(value, index, arr) {
    value.addEventListener("click", function() {
        if (event.target.parentNode.parentNode.parentNode.className == 'mid') {
            thisIndex = Array.prototype.slice.call(document.querySelectorAll('.' + event.target.className)).indexOf(event.target);
            var targetDiv = document.querySelectorAll(".show")[thisIndex];
            targetDiv.className = "showshow";
            targetDiv.querySelector(".back").addEventListener("click", function() {
                targetDiv.className = "show";
            }, false);
        } else {
            yMidId = index;
            var divs = document.querySelectorAll(".display > div");
            for (var i = 0; i < divs.length; i++) {
                if (2 < yMidId - i)
                    divs[i].className = classType[0];
                else if (2 == yMidId - i)
                    divs[i].className = classType[1];
                else if (1 == yMidId - i)
                    divs[i].className = classType[2];
                else if (i == yMidId)
                    divs[i].className = classType[3];
                else if (1 == i - yMidId)
                    divs[i].className = classType[4];
                else if (2 == i - yMidId)
                    divs[i].className = classType[5];
                else if (2 < i - yMidId)
                    divs[i].className = classType[6];
            }
        }
    });
}, true);