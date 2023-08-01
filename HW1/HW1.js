"use strict"
alert(`Здравствуйте`+" "+firstName+" "+lastName);
console.log(`##############################################################`)
const userAge=+prompt(`Введите свой год рождения (xxxx):`);
const todayYear=+prompt(`Введите год в настоящем времени (xxxx):`);
const resultAge=todayYear-userAge;
console.log([`userAge`], typeof resultAge, resultAge);
alert(`Ваш возрост`+` `+ resultAge);

console.log(`##############################################################`);
if(resultAge<18){
    console.log([`resultAge<18`],`Вам запрещён вход`);
    alert(`Вам запрещён вход`);  
}
else if(resultAge>70){
    console.log([`resultAge>60`],`Дышите глубже, у вас всё получиться`);
    alert(`Дышите глубже, у вас всё получиться`);
    console.log(`##############################################################`);
}else if(resultAge>18 || resultAge<=69){
    const confQuestion=confirm(`Любите ли вы деньги?`);
if(confQuestion===true){
    console.log([`confQuestion`], confQuestion);
    alert(`Многоуважаемый`+` `+firstName+` `+lastName+`,`+` `+` `+`добро пожаловать на семинар`+`!`);
}
else{
    alert(`Извините, желаем вам удачи!`)
}
}    







// console.log(`##############################################################`);
// const confQuestion=confirm(`Любите ли вы деньги?`);
// if(confQuestion===true){
//     console.log([`confQuestion`], confQuestion);
//     alert(`Многоуважаемый`+` `+firstName+` `+lastName+`,`+` `+` `+`добро пожаловать на семинар`+`!`);

// }
// else{
//     alert(`Извините, желаем вам удачи!`)
// }

