export const deepClone = (array) => {
	return JSON.parse(JSON.stringify(array));
};

export const findInArray = (id, array) => {
	return array.find((ItemInArray) => ItemInArray.id === id);
};

export const getIndex = (id, array) => {
	return array.findIndex((ItemInArray) => ItemInArray.id === id);
};
