var svg = document.getElementById("svg");
var NS = "http://www.w3.org/2000/svg";
var h = $(window).height();
var w = $(window).width();

var rid = 0;

var b_circle = document.getElementById("b_circle");
var b_dvd = document.getElementById("b_dvd");
var b_stop = document.getElementById("b_stop");

var reset = function(e){
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
    //console.log("reset");
}

var stop = function(e) {
    window.cancelAnimationFrame(rid);
    console.log("stop");
}

var hypnosis = function(e) {
    window.cancelAnimationFrame(rid);
    var r = 0;
    var grow = true;
    var c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", w/2);
    c.setAttribute("cy", h/2);
    c.setAttribute("r", r);
    c.setAttribute("fill","white");
 
    var circle = function() {
	reset();
	if (r % 5 == 0) {
	    var color = 'rgb(' + Math.floor(Math.random() * 256) + ',' +Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
	    c.setAttribute("fill",color);
	}
	svg.appendChild(c);
	c.setAttribute("r", r);
	if (r >= 0 && r <= 0.15*w) {
            if (grow){
		r += 1;
	    } else {
		r -= 1;
	    }
	}
	if (r >= 0.15*w) {
	    r -= 1;
	    grow = false;
	    console.log('grow = false');
	}
	if (r == 0) {
	    grow = true;
	}
	//console.log(r);
	rid = window.requestAnimationFrame(circle);
    }
    circle();
}

var dvd = function(e){}

b_circle.addEventListener("click", hypnosis);
b_dvd.addEventListener("click", dvd);
b_stop.addEventListener("click", stop);
