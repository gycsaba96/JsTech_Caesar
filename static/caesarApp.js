var app = angular.module("caesarApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/coding", {
        templateUrl : "coding.html"
    });
});

app.factory("datastore",function(){
      return { secret: "Type here your secret.",
               key: 5,
               charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
});

app.filter('caesarEncode', function(datastore) {
    return function(s) {
        let encoded = s.split("")
        .map((c)=>{
          let pos = datastore.charset.indexOf(c);
          if (pos>=0)
            return datastore.charset[(pos+datastore.key)%datastore.charset.length];
          else
            return c;
        })
        .join("");
        return encoded;
    };
});

app.filter('caesarDecode', function(datastore) {
    return function(s) {
        let decoded = s.split("")
        .map((c)=>{
          let pos = datastore.charset.indexOf(c);
          if (pos>=0)
            return datastore.charset[(datastore.charset.length+pos-datastore.key)%datastore.charset.length];
          else
            return c;
        })
        .join("");
        return decoded;
    };
});
