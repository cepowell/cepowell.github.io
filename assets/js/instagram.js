function resizeInstagramImages() {
  var instafeed = document.getElementById('instafeed');
  var images = instafeed.childNodes;
  for (var i = 0; i < images.length; i++) {
    var width = images[i].clientWidth;
    images[i].style.height = width;
  }
  instafeed.style.visibility = "visible";
}

window.addEventListener("load", function() {
  resizeInstagramImages();
});

window.addEventListener("resize", function() {
  resizeInstagramImages();
});
