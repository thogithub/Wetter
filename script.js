$(document).ready(function() {

     navigator.geolocation.getCurrentPosition(function(position) {
        //console.log(position);
        //$('.longitude').text(position.coords.longitude);
         //$('.latitude').text(position.coords.latitude);
         // $('.accuracy').text(position.coords.accuracy);

          var koordinaten = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude

          };
         

             $ajax({
            url: 'https://api.forecast.io/forecast/712e31acc32049f53e51ae6e6f7298f2/' + koordinaten.longitude + ',' + koordinaten.latitude
            data:{
            units: 'si',
            lang: 'de'
                },

            dataType: 'jsonp'
            }).done(function(data) {


            console.log(data);
        });

    });
});

