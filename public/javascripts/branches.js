app.controller('branches', function ($scope, $http) {
    navigator.geolocation.getCurrentPosition(function (location) {
        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);

        var mymap = L.map('mapid').setView(latlng, 10)
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
            maxZoom: 14,
            minZoom: 7,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiYmJyb29rMTU0IiwiYSI6ImNpcXN3dnJrdDAwMGNmd250bjhvZXpnbWsifQ.Nf9Zkfchos577IanoKMoYQ'
        }).addTo(mymap);

        /*  var marker = L.marker(latlng).addTo(mymap);
          marker.bindPopup("<b>" + branch.name + "</b><br><img dir=\"rtl\" style=\"height: 150px\" src='" + branch.pic + "'>").openPopup();*/
        
        var circle = L.circle(latlng, {radius: 500, color: "red"}).addTo(mymap);
        circle.bindPopup("our place");

        $http.get("/branches")
            .then(function (response) {
                var branch = response.data;

                for (var index in branch) {
                    var marker = L.marker([branch[index].xCoord, branch[index].yCoord]).addTo(mymap);
                    marker.bindPopup("<b>" + branch[index].name + "</b><br> כתובת:" + branch[index].address + "<br>טל:" + branch[index].tel + "<br><a href='#!luz'>ללוח זמנים</a>"+ "<br> <img style=\"height: 65px\" style=\"height: 65px\" src='/images/" + branch[index].img + "'>");
                }

                $scope.findClosed = function () {
                    var minDistance = 100000;
                    var branchIndex = -1;

                    for (var index in branch) {
                        var currDistance = Math.sqrt(Math.pow(branch[index].xCoord - location.coords.latitude, 2) +
                            Math.pow(branch[index].yCoord - location.coords.longitude, 2));

                        if (currDistance < minDistance) {
                            minDistance = currDistance;
                            branchIndex = index;
                        }
                    }

                    $scope.branchName = branch[branchIndex].name;
                };
            });
    });
})
