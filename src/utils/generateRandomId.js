export const generateRandomId = () => Math.random(8).toString().substring(2, 8) + Date.now().toString().substring(9);

export const assignId = obj => ({...obj, id: generateRandomId()});