document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;

    if (scrollPercentage < 5) {
        document.querySelector("footer").style.backgroundColor = "#051937";
    } else if (scrollPercentage < 15) {
        document.querySelector("footer").style.backgroundColor = "#004d7a";
    } else if (scrollPercentage < 30) {
        document.querySelector("footer").style.backgroundColor = "#008793";
    } else if (scrollPercentage < 45) {
        document.querySelector("footer").style.backgroundColor = "#00bf72";
    } else if (scrollPercentage < 60 ) {
        document.querySelector("footer").style.backgroundColor = "#a8eb12";
    } else if (scrollPercentage < 75 ) {
        document.querySelector("footer").style.backgroundColor = "#c3d600";
    } else if (scrollPercentage < 90 ) {
        document.querySelector("footer").style.backgroundColor = "#d7c100";
    } else {
        document.querySelector("footer").style.backgroundColor = " #e4ab00";
    }
});