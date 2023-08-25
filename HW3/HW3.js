`use strict`
// Home work 

// Via : cycle show in the console next picture 
// #
// ##
// ###
// ####
// #####
// ######
// odd , even 
//  # # # 
// # # # #
//  # # #
// # # # #

const cols=prompt( `Введи количество колонок:`);
const rows=prompt( `Введи количество столбцов:`);

function bildPiramid(cols, rows){
    const sharp=`#`;
    // const space=` `;
    const breakPoint =`\n`;
    let target=` `;
    for(let i = 0 ; i<cols; i++){
        for (let j=0;j<i;j++){
            target+=sharp;
        }
        target+= breakPoint;

    }
    return target;

}
const result=bildPiramid(cols,rows);
console.log(result)
console.log(`*************************************************`)
console.log(` `+`#`+` `+`#`+` `+`#`);
console.log(`#`+` `+`#`+` `+`#`+` `+`#`);
console.log(` `+`#`+` `+`#`+` `+`#`);
console.log(`#`+` `+`#`+` `+`#`+` `+`#`);
