"use strict";

let randomNumber = function (min, max) {
    if(min > max){
        return Math.floor(Math.random() * (max + 1))  // функция возвращает целое число из переданного диапазона включительно 

    }else {

       return min + Math.floor( Math.random() * (max + 1 - min)) 
    }
}
    
/*Проверил вторую функцию отрицательныx значений не получил, если только не передать в параметры функции отрицательное число. Хотел сделать проверку на отрицательное число методом Math.abs(), но понимания не хватило, как доделать до конца и подумал имеется ли вообще в этом смысл. Будут ли такие параметры в эту функцию передаваться.  */
       




 function checkLength (str, maxLenght) {
    return (str.lenght > maxLenght) ? true : false
 }





