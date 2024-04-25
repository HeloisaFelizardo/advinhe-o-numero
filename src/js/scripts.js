const frm = document.querySelector('form');
const inNumber = document.querySelector('#inNumber');
const outAttempts = document.querySelector('#outAttempts');
const resultElement = document.querySelector('h2');

const MAX_ATTEMPTS = 10;
let attempts = 0;
let secretNumber = generateSecretNumber();

outAttempts.textContent = `Estou pensando em um número de 1 a 100, você só tem ${MAX_ATTEMPTS} tentativas:`;

frm.addEventListener('submit', (e) => {
	e.preventDefault();

	if (resultElement.textContent.includes('Parabéns')) {
		resultElement.textContent = `Você já acertou! O número secreto é ${secretNumber}.`;
		inNumber.disabled = true;
		return;
	}

	try {
		const userNumber = Number(inNumber.value);
		if (isNaN(userNumber)) {
			throw new Error('Por favor, insira um número válido.');
		}

		const message =
			userNumber === secretNumber
				? `Parabéns! Você acertou! O número secreto é ${secretNumber}.`
				: userNumber < secretNumber
				? `O número ${userNumber} é menor que o número secreto.`
				: `O número ${userNumber} é maior que o número secreto.`;

		resultElement.textContent = message;
		attempts++;

		const remainingAttempts = MAX_ATTEMPTS - attempts;
		outAttempts.textContent =
			remainingAttempts === 0
				? `Você excedeu o número máximo de tentativas.`
				: `Estou pensando em um número de 1 a 100, você só tem ${remainingAttempts} tentativas:`;

		inNumber.value = '';
	} catch (error) {
		alert(error.message);
	}
});

function generateSecretNumber() {
	return Math.floor(Math.random() * 100) + 1;
}
