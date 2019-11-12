let bodyRect = document.body.getBoundingClientRect();
let first = document.getElementById("period1").getBoundingClientRect();
let last = document.getElementById("period21").getBoundingClientRect();
let bar = document.getElementsByClassName("topbar")[0].getBoundingClientRect();
let pos1   = first.top - bodyRect.top - bar.bottom;
let pos21   = last.top - bodyRect.top - bar.bottom;
let ratio = (pos21 - pos1)/(2100+1949);

setInterval(function() {
    let where = parseInt((scrollY - pos1)/ratio - 2101);
    if (where >= -2100 && where <= 2019) {
        document.getElementById("timepointer").style.display = "inline";
        if (where < 0) {
            document.getElementById("time").innerHTML = (where*-1)+" B.C.";
        }
        else if(where > 0){
            document.getElementById("time").innerHTML = "ค.ศ. "+where;
        }
        else{
            document.getElementById("time").innerHTML = where;
        }
    }
    else{
        document.getElementById("timepointer").style.display = "none";
        document.getElementById("time").innerHTML = "";
    }
    
}, 50);