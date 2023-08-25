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
console.log(`*************************************************`)

const cols1=prompt( `Введи количество колонок:`);
const rows1=prompt( `Введи количество столбцов:`);
function bildPiramid1(rows, cols) {
    let target1 = "";

    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols1; j++) {
            if ((i + j) % 2 === 0) {
                target1 += "#";
            } else {
                target1 += " ";
            }
        }
        target1 += "\n";
    }

    return target1;
}


const target1 = bildPiramid1(rows, cols);
console.log(target1);
