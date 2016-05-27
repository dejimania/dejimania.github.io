'use strict';

angular.module('myApp.addPost', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/addPost', {
    templateUrl: 'addPost/addPost.html',
    controller: 'AddPostCtrl'
  });
}])

.controller('AddPostCtrl', ['$scope','$firebase','$location','CommonProp',function($scope,$firebase,$location,CommonProp) {
     
	if(!CommonProp.getUser()){
    $location.path('/home');
}
     var login={};
$scope.login=login;

	$scope.logout = function(){
    CommonProp.logoutUser();
}

    $scope.AddPost = function(){
	login.loading = true;
	var title = $scope.document.title;
		var links = $scope.document.link;
		var dept = $scope.document.dept;
		var Keywords = $scope.document.keyword;
		var file_path = $scope.document.file_path;
        var comments = $scope.document.comment;

	
	var firebaseObj = new Firebase("https://document-management-da8e8.firebaseio.com/Documents");
	
    	var fb = $firebase(firebaseObj);
        
	var user = CommonProp.getUser();
	

	fb.$push({ title: title,links: link,dept: dept,keywords: keyword,file_path: file_path,comments: comment,emailId: user,'.priority': user}).then(function(ref) {
		login.loading = false;
		$location.path('/welcome');
	}, function(error) {
		login.loading = false;
  		console.log("Error:", error);
	});

    }
}]);

