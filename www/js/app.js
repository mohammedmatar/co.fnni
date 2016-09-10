// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MainController', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform, $window, $document) {
  // $scope.lat = 'latttttt';
  // $scope.lon = 'lonnnnnnn';
  ionic.Platform.ready(function(){

    $ionicLoading.show({
        template: '<ion-spinner icon="bubbles"></ion-spinner><br/>please wait ...'
    });

    // var watchOptions = {
    // timeout : 7000,
    // enableHighAccuracy: false // may cause errors if true
  // };

  //
  // var watch = $cordovaGeolocation.watchPosition(watchOptions);
  // watch.then(
    // null,
    // function(position) {
    //   $scope.lat  = position.coords.latitude;
    //   $scope.lon = position.coords.longitude;

      // var frame =  angular.element( document.querySelector( '#fnni' ) );
      // frame.contentWindow.postMessage({lat: $scope.lat, lon: $scope.lon}, '*');
      // $window.localStorage.setItem('lat', $scope.lat);
      // $window.localStorage.setItem('lon', $scope.lon);
      // $ionicLoading.hide();
    // },
    // function(err) {

  // });
  // watch.clearWatch();
    var posOptions = {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0
    };

    // while (true) {
    //
    // }
    $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        $scope.lat  = position.coords.latitude;
        $scope.lon  = position.coords.longitude;

        var frame = document.getElementById('fnni');
        frame.contentWindow.postMessage({lat: $scope.lat, lon: $scope.lon}, '*');
        $window.localStorage.setItem('lat', $scope.lat);
        $window.localStorage.setItem('lon', $scope.lon);
        // var myLatlng = new google.maps.LatLng(lat, long);

        // var mapOptions = {
            // center: myLatlng,
            // zoom: 16,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        // };

        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        // $scope.map = map;
        $ionicLoading.hide();

    }, function(err) {
        $ionicLoading.hide();
        console.log(err);
    });


  })
});
