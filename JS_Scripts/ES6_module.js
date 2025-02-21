// ES6 Module = An external file that contains resusabe code that can be imported into other javascript FileSystem.
//              Write resuable code for many different apps.Can contain variables, classes, fucntions ... and more
//              It use introduced as a part of ECMAScript 2015 update  

// const PI = 3.14;

//to use the code or fucntions we must use export keyword to ensure that can be used in other js files

export const PI = 3.14;

export function getArea(radius){
    return PI * radius * radius;
}

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getVolume(radius){
    return 4 * PI * radius;
}