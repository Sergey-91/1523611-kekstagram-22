"use strict";

let randomNumber = (min, max) => {
    if(min > max){

        return false 

    } else {

        return Math.floor(Math.random() * (max + 1))
        
    }
};


       




 let checkLength = (str, maxLength) => {

    return (str.lenght > maxLength) ? true : false;

 };
    
 





