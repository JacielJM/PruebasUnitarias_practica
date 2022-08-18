const factorial = require('./factorial');

test('El factorial de 1 es 1', () => {
	expect(factorial.factorial(1)).toBe(1);
});

test('El factorial de 0 es 1', () => {
	expect(factorial.factorial(0)).toBe(1);
});

test('El factorial de 3 es 6', () => {
	expect(factorial.factorial(3)).toBe(6);
});

test('El factorial de -1 es no es admitido', () => {
	expect(factorial.factorial(-1)).toBe('No se admiten números negativos');
});
