jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
		  e.preventDefault();

		  var email = $('.login .email').val();
		  var password= $('.login .password').val();

		  if(!email){
		  	alert('no entro nada');
		  }else if(!password){
		  	alert('debe ingresar una contraseña.' + email);
		  }else{

		  firebase
			.auth().signInWithEmailAndPassword(email, password)
			.then(function(){
				alert('Bienvenido');
			})
			.catch(function(error) {
				alert('No Eres Bienvenido');
				});
			}
		}
	);	
});

jQuery(document).ready(function($){
	$('.register').on(
		'submit',
		function(e){
		  e.preventDefault();

		  var email = $('.register .email').val();
		  var password= $('.register .password').val();

		  if(!email){
		  	alert('no entro nada');
		  }else if(!password){
		  	alert('debe ingresar una contraseña.' + email);
		  }else{
		  	firebase.auth().createUserWithEmailAndPassword(email, password)
		  	.catch(function(error) {
		  		alert('no eres Bienvenido');
  
		   });

		   }
		}
	);	
});