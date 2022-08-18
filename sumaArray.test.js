const sumaArray = require('./sumaArray');

test('La suma de [1, 2, 3] es 6', () => {
	expect(sumaArray.sumaArray([1, 2, 3])).toBe(6);
});

test('La suma de [1, [2, [3, 4]], [5, 6], 7] es 28', () => {
	expect(sumaArray.sumaArray([1, [2, [3, 4]], [5, 6], 7])).toBe(28);
});

test('La suma de [1, [-5, [3, 4]], [5, -2], 7] es 13', () => {
	expect(sumaArray.sumaArray([1, [-5, [3, 4]], [5, -2], 7])).toBe(13);
});

test('La suma de un arreglo vacío es 0', () => {
	expect(sumaArray.sumaArray([])).toBe(0);
});
