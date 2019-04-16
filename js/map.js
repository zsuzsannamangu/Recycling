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
      content:'<h1>Metro Central Hazardous Waste</h1><br><h3> 6161 NW 61st Ave, Portland, OR 97210</h3>'
    },
    {
      coords:{lat:45.368103,lng:-122.817439},
      iconImage:recycleIcon,
      content:'<h1>Pride Recycling Depot</h1><br><h3>13910 SW Tualatin-Sherwood Rd.<br>Sherwood, OR 97140</h3>'
    },
    {
      coords:{lat:45.569101,lng:-122.601563},
      iconImage:recycleIcon,
      content:'<h1>Total Reclaim</h1><br><h3>6427 NE 59th Place<br>Portland OR 97218</h3>'
    },
    {
      coords:{lat:45.424187,lng:-122.761219},
      iconImage:recycleIcon,
      content:'<h1>Agilyx Corporation</h1><br><h3>13240 SW Wall St.<br>Tigard, OR 97223</h3>'
    },
    // {
    //   coords:{lat:45.569101,lng:-122.601563},
    //   iconImage:recycleIcon,
    //   content:'<h1>Total Reclaim</h1><br><h3>6427 NE 59th Place<br>Portland OR 97218</h3>'
    // },
  ]

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

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
    }
  }
