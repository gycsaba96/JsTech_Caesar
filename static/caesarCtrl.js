app.controller("caesarCtrl", function($scope,$http,datastore) {
    console.log("Controller connecting...");
    $scope.data = datastore;
    $scope.$watchCollection('data.secret', function() {
      $http({
        url: "/give_me_a_secret",
        method: "POST",
        data: { 'secret' : $scope.data.secret }
        })
      .then(
          function(response) { // success
            console.log("Got key:"+response.data.key);
            $scope.data.key = response.data.key;
          },
          function(response) { // failed
              console.log("Server not responding.");
              $scope.data.key=0;
          }
      );      
    });


    $scope.stringToEncode = "Ceterum censeo Carthaginem delenda esse.";
    $scope.stringToDecode = "";

});
