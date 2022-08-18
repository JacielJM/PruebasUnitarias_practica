const sumaArray = array => {
	let suma = 0;
	for (let i = 0; i < array.length; i++) {
		Array.isArray(array[i])
			? (suma += sumaArray(array[i]))
			: (suma += array[i]);
	}
	return suma;
};

const suma = {
	sumaArray,
};

module.exports = suma;
