//初期、東京の緯度経度
let lat　= 35.6803997;
let lng = 139.7690174;
 
function search(){
   let place = document.getElementById('place').value;
   let geocoder = new google.maps.Geocoder();
   // ジオコーディング　検索実行
   geocoder.geocode({"address" : place}, function(results, status) {
   if (status == google.maps.GeocoderStatus.OK) {
         
        lat = results[0].geometry.location.lat();//緯度を取得
        lng = results[0].geometry.location.lng();//経度を取得
        // var ido = document.getElementById('ido')
        // ido.innerHTML = lat;
        // var keido = document.getElementById('keido')
        // keido.innerHTML = lng;
   }
  });
}

//図形読み込み
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 13,
  });
  const drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: google.maps.drawing.OverlayType.MARKER,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        // google.maps.drawing.OverlayType.CIRCLE,
        // google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        // google.maps.drawing.OverlayType.RECTANGLE,
      ],
    },
    markerOptions: {
      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    },
    circleOptions: {
      fillColor: "#ffff00",
      fillOpacity: 1,
      strokeWeight: 5,
      clickable: false,
      editable: true,
      zIndex: 1,
    },
    polylineOptions: {
      strokeColor: "#ff0000",
      strokeWidth: 3,
      draggable: true,
      clickable: true,
      editable: true ,
    },
  });
  drawingManager.setMap(map);
}


function view(){
  search();
  setTimeout("initMap()", 400);
}
