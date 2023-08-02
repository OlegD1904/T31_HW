`use strict`

//! 
// User validator

// 1) Get user : name , email , password , age
  //Получить пользователя: имя, адрес электронной почты, пароль, возраст
// 2) name must has at least 2 symbols
   //имя должно содержать не менее 2 символов
// 3) if name is valid -> check user email
   //если имя верное -> проверить электронную почту пользователя
// 4) email should include into it -> "@" symbol
   //электронная почта должна включать в себя -> символ "@"
// 5) password should be longer than 7 and * might
  //пароль должен быть длиннее 7 и * может
// include : numbers and strings
   //включают: числа и строки
// 6) This case migth be acceed only if all conditions above
   //Этот случай может быть достигнут только при выполнении всех вышеперечисленных условий. 
// is TRUE...age must be bigger than 18
   //ИСТИНА... возраст должен быть больше 18 лет
// 7) If all above is true -> console -> Welcome!
   //Если все вышесказанное верно -> консоль -> Добро пожаловать!
// Otherwise -> Go out of here!
  //В противном случае -> Иди отсюда!
  const validator={
    validName:false,
    validEmail:false,
    validPassword:false,
    validAge:false,
  }

  while(!validator.validName){
   let userName=prompt(`Введите ваше имя:`);
   if(userName.length>2){
      validator.validName=true;
      console.log([`userName`, typeof userName, userName]);
      alert(`Здравствуйте`+` `+userName+` `+`!`)
   }
  }