'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

//do the formatting and and images for the main page
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 }
  ];

  $scope.restaurants = [
    { name: 'Luna Park', id: 1, street: '675 La Brea ave', city: 'Los Angeles CA 90036', phone: '(323)-555-555'},
    { name: 'Taste Melrose', id: 2, street: '8454 Melrose ave', city: 'West Hollywood CA 90069', phone: '(323)-555-555'},
    { name: 'Sushi Roku', id: 3, street: '8445 W 3RD ST', city: 'Los Angeles CA 90048', phone: '(323)-555-555'},
    { name: 'El Carmen', id: 4, street: '8138 W 3RD ST', city: 'Los Angeles CA 90048', phone: '(323)-555-555'},
    { name: 'Saddle Ranch', id: 5, street: '8371 Sunset Blvd', city: 'West Hollywood CA 90069', phone: '(323)-656-2007'}
  ];
	
	$scope.set_image = function (restaurant) {
	  if (restaurant.id === 1) {
		return { //background: 'url(http://artlogic1991.files.wordpress.com/2013/03/angularjs-large.png)',
				background: 'url(https://s3-us-west-2.amazonaws.com/mk544/11.jpg)',
				'background-size' : 'cover'
			   }
	  } else if (restaurant.id === 2) {
		  return { //background: 'url(http://artlogic1991.files.wordpress.com/2013/03/angularjs-large.png)',
				background: 'url(https://s3-us-west-2.amazonaws.com/mk544/8.jpg)',
				'background-size' : 'cover'
			     }
	  } else if (restaurant.id === 3) {
		  return { //background: 'url(http://artlogic1991.files.wordpress.com/2013/03/angularjs-large.png)',
				background: 'url(https://s3-us-west-2.amazonaws.com/mk544/17.jpg)',
				'background-size' : 'cover'
			     }
	  } else if (restaurant.id === 4) {
		  return { //background: 'url(http://artlogic1991.files.wordpress.com/2013/03/angularjs-large.png)',
				background: 'url(https://s3-us-west-2.amazonaws.com/mk544/30.jpg)',
				'background-size' : 'cover'
			     }
	  } else if (restaurant.id === 5) {
		  return { //background: 'url(http://artlogic1991.files.wordpress.com/2013/03/angularjs-large.png)',
				background: 'url(https://s3-us-west-2.amazonaws.com/mk544/13.jpg)',
				'background-size' : 'cover'
			     }
	  }
	};
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
