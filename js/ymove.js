var yMidId = 2;
var classType = ["lefthide", "left2", "left1", "mid", "right1", "right2", "righthide"];

addEventListener("keydown", function() {
    var divs = document.querySelectorAll(".display > div");
    if (event.keyCode == 37) {
        yMidId = yMidId - 1 >= 0 ? yMidId - 1 : yMidId;
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
    } else if (event.keyCode == 39) {
        yMidId = yMidId + 1 < divs.length ? yMidId + 1 : yMidId;
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
}, false);