document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form');
	form.addEventListener('submit',formSend)

	async function formSend(e){
	e.preventDefault;

	let error = formValidate(form);

	if (error===0){

	} else{
		alert('Заполните обязательное поле');
	}
	}

	function formValidate(form){
	let error = 0;
	let formReq = document.querySelector('._req');

	for (let index=0; index<formReq.length;index++){
	const input = formReq[index];
	formRemoveError(input);

	if(input.classList.contains('_email')){
	if(emailTest(input)){
	formAddError(input);
	error++;
	}
	} else if(input.getAttribute('type')) {

		}
	}
	}


	function emailTest(input){
	return
	}
});