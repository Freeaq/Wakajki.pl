function resizeMapAreas() {
    var image = document.querySelector('img[usemap="#MapAreas"]');
    var areas = document.querySelectorAll('area');
    var originalWidth = image.naturalWidth; 
    var currentWidth = image.offsetWidth; 
    var scale = currentWidth / originalWidth; 

    areas.forEach(function(area) {
      var originalCoords = area.dataset.originalCoords;
      if (!originalCoords) {
        originalCoords = area.getAttribute('coords');
        area.dataset.originalCoords = originalCoords; 
      }
      var coordsArray = originalCoords.split(','); 
      var scaledCoords = coordsArray.map(function(coord) {
        return Math.round(coord * scale); 
      }).join(','); 
      area.setAttribute('coords', scaledCoords); 
    });
  }


  window.onload = resizeMapAreas;
  window.onresize = resizeMapAreas;