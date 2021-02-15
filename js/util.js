const randomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)]
};
let randomNumber = (min, max) => {
if(min > max) {
let tmp = min;
min = max;
max = tmp;
}
return min + Math.floor( Math.random() * (max + 1 - min))
};
let checkLength = (str, maxLength) => {
return (str.lenght > maxLength) ? true : false;
};
export {randomElement, randomNumber};