"use strict"
const firstName=prompt(`Введите своё имя:`);
console.log ([`FirstName`], typeof firstName, firstName);
const lastName=prompt(`Введите свою фамилию`);
console.log ([`LastName`],typeof lastName, lastName);
alert(`Здравствуйте`+""+firstName+""+lastName);
console.log(`##############################################################`)
const userAge=+prompt(`Введите свой год рождения (xxxx):`);
const todayYear=+prompt(`Введите год в настоящем времени (xxxx):`);
const resultAge=todayYear-userAge;
console.log([`userAge`], typeof resultAge, resultAge);
alert(`Ваш возрост`+""+ resultAge)
console.log(`##############################################################`);
if(resultAge<18){
    console.log(`Вам запрещён вход`);
    alert(`Вам запрещён вход`);
   
        
}
else if(resultAge>60){
    console.log(`Дышите глубже, у вас всё получиться`);
    alert(`Дышите глубже, у вас всё получиться`);
    
}
console.log(`##############################################################`);
const confQuestion=confirm(`Любите ли вы деньги?`);
if(confQuestion===true){
    console.log([`confQuestion`], confQuestion);
    alert(`Добро пожаловать на семинар`+firstName+lastName+`!`);

}
else{
    alert(`Извините, желаем вам удачи!`)
}
