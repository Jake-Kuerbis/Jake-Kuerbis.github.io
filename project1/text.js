
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

//

  var p = document.getElementById("paragraph"),
  i;

var spans = document.querySelectorAll('span'),
  rand =  spans[Math.floor(Math.random() * spans.length)];

for (i = 0; i < (spans.length); i += 1) {
  rand.classList.add("different-style");
}

//

new TypeIt("#story", {
    speed: 15,
    loop: false,
    cursor: false,
    lifeLike: true,
  })
  .go();