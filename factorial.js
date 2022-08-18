const factorial = numero =>
	numero < 0
		? 'No se admiten números negativos'
		: numero <= 1
		? 1
		: numero * factorial(numero - 1);

const fnFactorial = {
	factorial,
};

module.exports = fnFactorial;
