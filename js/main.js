function validateForm(){
	const expRegName = /^[a-zA-Z]+$/
	const expRegMail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	$('#name').parent().find('span').remove();
	let name = $('#name').val().trim();
	if (name == '') {
		$('#name').parent().append('<span>Campo Obligatorio!</span>');
	} else if (expRegName.test(name) == false){
		$('#name').parent().append('<span>Nombre Inválido!</span>');
	} else if (name[0].match(/[A-Z]/) == null) {
		$('#name').parent().append('<span>Nombre Inválido!</span>');
	}
	$('#lastname').parent().find('span').remove();
	let lastname = $('#lastname').val().trim();
	if (lastname == '') {
		$('#lastname').parent().append('<span>Campo Obligatorio!</span>');
	} else if (expRegName.test(lastname) == false){
		$('#lastname').parent().append('<span>Apellido Inválido!</span>');
	} else if (lastname[0].match(/[A-Z]/) == null) {
		$('#lastname').parent().append('<span>Apellido Inválido!</span>');
	}
	$('#input-email').parent().find('span').remove();
	let email = $('#input-email').val().trim();
	if (email == '') {
		$('#input-email').parent().append('<span>Campo Obligatorio!</span>');
	} else if (expRegMail.test(email) == false){
		$('#input-email').parent().append('<span>Email Inválido!</span>');
	}
	$('#input-password').parent().find('span').remove();
	let password = $('#input-password').val().trim();
	if (password == '') {
		$('#input-password').parent().append('<span>Campo Obligatorio!</span>');
	} else if (expRegName.test(password) == false){
		$('#input-password').parent().append('<span>Password Inválida!</span>');
	} else if (password[0].match(/[A-Z]/) == null) {
		$('#input-password').parent().append('<span>Password Inválida!</span>');
	}
}