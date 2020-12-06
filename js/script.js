const subForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const alert = document.getElementById('alert');

subForm.addEventListener('submit', e => {
	e.preventDefault();

	if(emailInput.value === '') {
		alert.innerText = 'Please fill out the email address';
		alert.classList.remove('d-none');
		emailInput.style.borderColor = 'red';

	} else if(emailInput.value.indexOf('.') <= 0 || emailInput.value.indexOf('@') <= 0) {
		alert.innerText = 'Please provide a valid email address';
		alert.classList.remove('d-none');
		emailInput.style.borderColor = 'red';

	} else {
		alert.classList.add('d-none');
		emailInput.style.borderColor = '';
	}
});