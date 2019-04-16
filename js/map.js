function initMap() {
  //Map options
  var options = {
    zoom:11,
    center: {lat:45.512794,lng:-122.679565}
  }

  // New map
  var map = new google.maps.Map(document.getElementById("map"), options);

  // Map Icons
  var recycleIcon = {
    url: "recycle.jpg",
    scaledSize: new google.maps.Size(25, 25)
  };

  // Array of Markers
  var markers = [
    {
      coords:{lat:45.569035,lng:-122.748100},
      iconImage:recycleIcon,
      content:'<h1>Metro Center Hazardous Waste</h1>'
    }]

    // Loop through Markers

    for(var i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }

    //Add Marker function
    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        // icon:props.iconImage
      });
      // Check for cuson icon
      if (props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      // Check for content
      if (props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        })
      }
    }
  }
