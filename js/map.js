function initMap() {
  //Map options
  var options = {
    zoom:10.5,
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
      content:'<h2><a href="https://www.oregonmetro.gov/tools-living/garbage-and-recycling/garbage-recycling-hazardous-waste-disposal-portland">Metro Central Hazardous Waste</a></h2><br><h4> 6161 NW 61st Ave, Portland, OR 97210</h4> $(.metro).show();'
    },
    {
      coords:{lat:45.368103,lng:-122.817439},
      iconImage:recycleIcon,
      content:'<h2><a href="https://pridedisposal.com/resources/recycling-drop-off">Pride Recycling Depot</a></h2><br><h4>13910 SW Tualatin-Sherwood Rd.<br>Sherwood, OR 97140</h4>'
    },
    {
      coords:{lat:45.569101,lng:-122.601563},
      iconImage:recycleIcon,
      content:'<h2><a href="https://www.totalreclaim.com/">Total Reclaim</a></h2><br><h4>6427 NE 59th Place<br>Portland OR 97218</h4>'
    },
    {
      coords:{lat:45.424187,lng:-122.761219},
      iconImage:recycleIcon,
      content:'<h2><a href="https://www.agilyx.com/">Agilyx Corporation</a></h2><br><h4>13240 SW Wall St.<br>Tigard, OR 97223</h4>'
    },
    {
      coords:{lat:45.516599,lng:-122.645374},
      iconImage:recycleIcon,
      content:'<h2><a href="https://www.batteryxchange.com/">Battery X-Change</a></h2><br><h4>2003 SE Belmont St.<br>Portland, OR 97214</h4>'
    },
    {
      coords:{lat:45.535126,lng:-122.653145},
      iconImage:recycleIcon,
      content:'<h2><a href="http://www.goodwill.org/">Goodwill Industries</a></h2><br><h4>1231 NE Broadway, Portland, OR 97232</h4>'
    },

  ]

  // Loop through Markers

  for(var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }


  //Add Marker function
  function addMarker(props,){
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

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
        alert(this.props.content);
      });


    }
  }
}
