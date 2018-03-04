app.controller('branches', function ($scope) {
    navigator.geolocation.getCurrentPosition(function (location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

        var mymap = L.map('mapid').setView(latlng, 13)
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);

        var branch = {"name": "החלוץ 110", "pic": "http://www.around.co.il/wp-content/uploads/2015/05/%D7%91%D7%A0%D7%A7-%D7%94%D7%A4%D7%95%D7%A2%D7%9C%D7%99%D7%9D-%D7%A1%D7%A0%D7%99%D7%A3-680-%D7%9B%D7%A4%D7%A8-%D7%A9%D7%9E%D7%A8%D7%99%D7%94%D7%95.jpg"};
        
        var marker = L.marker(latlng).addTo(mymap);
        marker.bindPopup("<b>" + branch.name + "</b><br><img dir=\"rtl\" style=\"height: 150px\" src='"+branch.pic+"'>").openPopup();
    });
})
