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

        /*  var marker = L.marker(latlng).addTo(mymap);
          marker.bindPopup("<b>" + branch.name + "</b><br><img dir=\"rtl\" style=\"height: 150px\" src='" + branch.pic + "'>").openPopup();*/

        var branch = [{
                "xCoord": 32.31615,
                "yCoord": 34.87061,
                "name": "החלוץ 110",
                "pic": "a.jpg"
            },
            {
                "xCoord": 32.7942,
                "yCoord": 35.02991,
                "name": "בר אילן 5",
                "pic": "b.jpg"
            },
            {
                "xCoord": 30.58354,
                "yCoord": 34.791461999991000,
                "name": "ההסתדרות 68",
                "pic": "c.jpg"
            }];

        for (var index in branch) {
            var marker = L.marker([branch[index].xCoord, branch[index].yCoord]).addTo(mymap);
            marker.bindPopup("<b>" + branch[index].name + "</b><br><img style=\"height: 150px\" dir=\"rtl\" style=\"height: 150px\" src='" + branch[index].pic + "'>").openPopup();
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
})
