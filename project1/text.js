
(function() {
    var pres = document.querySelectorAll("#images pre");
    var len = pres.length;
    for(var i = 0; i < pres.length; i = i + 1) {
        pres[i].style.display = 'none';
    }
    var a = 0;
    window.setInterval(function() {
        pres[a].style.display = 'none';
        pres[(a + 1)%len].style.display = 'block';
        a = (a + 1) % len;
    }, 45);
}());
