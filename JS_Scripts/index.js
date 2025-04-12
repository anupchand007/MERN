//lets import the modules from the file

import {PI, getArea, getVolume, getCircumference} from "./ES6_module.js";

console.log(PI);

let area = getArea(2);
console.log(area.toFixed(2));

let volume = getVolume(3);
console.log(volume.toFixed(2));

let cic = getCircumference(3);
console.log(cic.toFixed(2));

function add(a,b){
    return a +b ;

}

const result =  add(2,5);
result;

