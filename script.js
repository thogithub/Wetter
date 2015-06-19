$(document).ready(function() {

    var skycons = new Skycons({
            color: "#bada55",
            resizeClear: true
        });

     navigator.geolocation.getCurrentPosition(function(position) {
        //console.log(position);
        //$('.longitude').text(position.coords.longitude);
         //$('.latitude').text(position.coords.latitude);
         // $('.accuracy').text(position.coords.accuracy);


         // Koordinaten bewusst vertauscht.
         
          var koordinaten = {
            longitude: position.coords.latitude,
            latitude: position.coords.longitude,


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



            $('.temperatur').text(data.currently.temperature + "°C");

            $('.summary').text(data.currently.summary);

            var iicon = data.currently.icon;

            skycons.set($('.icon')[0], data.currently.icon);

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

            

        //skycons.add($('.icon')[0], Skycons.RAIN);
        //skycons.add($('.icon')[0], Skycons.iicon);

        skycons.play();

        //setTimeout(function(){
        //    skycons.set($('.icon')[0], Skycons.PARTLY_CLOUDY_DAY)
        // }, 5000)

});

