var GPS = document.getElementById("GPSlocation")

function getGPSLocation() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(displayPosition)
  } else {
   myLocation.innerHTML = "Not available"
  }
}

function displayPosition(position) {
  GPS.innerHTML = "Longitude: " + position.coords.longitude + " Latitude: " + position.coords.latitude
}