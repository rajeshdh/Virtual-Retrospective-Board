var DeepstreamServer = require('deepstream.io');
var tutorialServer = new DeepstreamServer();
tutorialServer.set('host', 'localhost');
tutorialServer.set('port', 6020);
tutorialServer.set('permissionHandler', {
  isValidUser: function( connectionData, authData, callback ) {
	  // We don't care what the user name is,
	  // as long as one is specified.
	  if (!authData.username ) {
		  callback(' No username specified');
	  }
	  
	  // Let's keep things simple and expect the same password
	  // from all users.
	  else if ( authData.password !== 'sesame' ) {
		  callback( 'Wrong password' );
	  } 
	  
	  // All good. Let's log the user in.
	  else {
		  callback( null, authData.username);
	  }
  },
  canPerformAction: function( username, message, callback ) {
	  // Allow everything as long as the client is logged in.
	  callback( null, true );
  }
});
tutorialServer.start();