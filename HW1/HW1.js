"use strict"
//! Условие
// U should create a programm that takes :
// name
// yearOfBirth
// surname
// Is it love money ?

// as a result : both (users name and surname ) into modal window
// how old is it , let say :
// user entred 1973 => 50

// *
// if isLove -> Welcome , pane !
// otherwise !isLove -> Sorry , here is a training business,
//  go away please!


const firstName=prompt(`Введите своё имя:`);
console.log ([`FirstName`], typeof firstName, firstName);
const lastName=prompt(`Введите свою фамилию`);
console.log ([`LastName`],typeof lastName, lastName);
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








