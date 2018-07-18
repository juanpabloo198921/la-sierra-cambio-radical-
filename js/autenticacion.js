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
		  	alert('debe ingresar una contraseña.');
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

	$('.registro').on(
		'submit',
		function(e){
		  e.preventDefault();

		  var email = $('.registro .email').val();
		  var password= $('.registro .password').val();

		  if(!email){
		  	alert('no entro nada');
		  }else if(!password){
		  	alert('debe ingresar una contraseña.' + email);
		  }else{

		  firebase
			.auth().createUserWithEmailAndPassword(email, password)
			.then(function(){
				alert('Bienvenido');
			})
			.catch(function(error) {
				alert('No Eres Bienvenido');
				});
			};
		}
	);	
});