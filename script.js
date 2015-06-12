$(document).ready(function() {

     navigator.geolocation.getCurrentPosition(function(position) {
        //console.log(position);
        //$('.longitude').text(position.coords.longitude);
         //$('.latitude').text(position.coords.latitude);
         // $('.accuracy').text(position.coords.accuracy);

          var koordinaten = {
            longitude: position.coords.latitude,
            latitude: position.coords.longitude

          };
         

        $.ajax({
            url: 'https://api.forecast.io/forecast/e755dcb8a5bf2fe761849bf9d07d6f7d/' + koordinaten.longitude + ',' + koordinaten.latitude,
            data:{
                units: 'si',
                lang: 'de'
            },

            dataType: 'jsonp'

        }).done(function(data) {


            console.log(data);

            $('.longitude').text(data.currently.apparentTemperature + "°C");

            // GOOGLE GEOCODING

                $.ajax({
                    url: 'https://maps.googleapis.com/maps/api/geocode/json',
                    data:{
                        latlng: koordinaten.longitude + ',' + koordinaten.latitude,
                        key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
                        language: 'de'
                    }
                }).done(function(data){
                    console.log(data);

                    $('.ort').text(data.results[0].address_components[1].long_name);
                });

        });

    });
});

