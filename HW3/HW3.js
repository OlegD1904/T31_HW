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

  
// const cols=prompt( `Введи количество столбцов:`);
// const rows=prompt( `Введи количество рядов:`);

// function bildPiramid(cols, rows){
//     const sharp=`#`;
//    const breakPoint =`\n`;
//    let target=` `;
//     for(let i = 0 ; i<rows; i++){
//         for (let j=0;j<i;j++){
//             target+=sharp;
//         }
//         target+= breakPoint;

//     }
//     return target;
// }
//  const result=bildPiramid(cols,rows);
//  console.log(result)



// console.log(`*************************************************`)
// console.log(` `+`#`+` `+`#`+` `+`#`);
// console.log(`#`+` `+`#`+` `+`#`+` `+`#`);
// console.log(` `+`#`+` `+`#`+` `+`#`);
// console.log(`*************************************************`)

// const cols1=prompt( `Введи количество столбцов:`);
// const rows1=prompt( `Введи количество рядов:`);
// function bildPiramid1(rows, cols) {
//     let target1 = "";

//     for (let i = 0; i < rows1; i++) {
//         for (let j = 0; j < cols1; j++) {
//             if ((i + j) % 4 === 0) {
//                 target1 += "#";
//             } else {
//                 target1 += "*";
//             }
//         }
//         target1 += "\n";
//     }

//     return target1;
// }


// const target1 = bildPiramid1(rows, cols);
// console.log(target1);


// const cols=+prompt(`Cols:`);
// const rows=+prompt(`Rows:`);

// function bidPiromid(cols,rows){
//     const star=`*`;
//     const breakPoint=`\n`;
//     let target=``;
//     for (let i=0; i<rows; i++){
//         for(let k=0; k<i; k++){
//             target+=star;
//         }
//         target+=breakPoint;
//     }
//     return target
// }
// const result=bidPiromid(cols,rows)
// console.log(result)

// const cols1=prompt(`Cols:`);
// const rows1=prompt(`Rows:`);

// function piramida( cols, rows){
//     const sharp=`#`;
//     const breckPoint=`\n`;
//     let target = ` `;
//     for(let i=0; i<cols1; i++){
//         for(let k=0; k<i; k++){
//             target+=sharp;
//         }
//         target+=breckPoint;
//            }
//     return target
// }
// const result=piramida(cols1,rows1);
// console.log(result)

// const cols=prompt(`cols:`);
// const rows=prompt(`rows`);
// function piramida(cols,rows){
//     const sharp=`world`;
//     const breakPoint=`\n`;
//     let target=``;
//     for(let i=0; i<cols;i++){
//         for(let k=0; k<i;k++){
//             target+=sharp;
//         }
//         target+=breakPoint;
//     }
//     return target
// }
// const result=piramida(cols,rows);
// console.log(result);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const cols=prompt(`Cols:`);
// const rows=prompt(`Rows:`);
// function piramidBilding(cols,rows){
//     const scharp=`#`;
//     const breakPoint=`\n`;
//     let target=``;
//     for(let i=0; i<cols;i++){
//         for(let j=0; j<i;j++){
//             target+=scharp;
//         }
//         target+=breakPoint;
//     }
//     return target
// }
// const result=piramidBilding(cols,rows);
// console.log(result);
// console.log(`@@@@@@@@@@@@@@@@@@@@@@@@`)

// const cols1=prompt(`Cols:`);
// const rows1=prompt(`Rows:`);

// function piramid1(cols,rows){
//     const scharp =`#`;
//     const brekPoint=`\n`;
//     const speis=` `;
//     let target1=``;
//     for (let i=0; i<cols1;i++){
//         for(let k=0; k<rows1; k++){
//             if((k+i)%2===0){
//                 target1+=scharp;
//             }else{ target1+=speis;
//             }
//         }
//         target1+=brekPoint
//     }
//     return target1;
// }
// const result1=piramid1(cols,rows);
// console.log(result1)
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const cols=prompt(`Cols:`);
const rows=prompt(`Rows:`);
function piramida(cols,rows){
    const sharp=`#`;
    const breakPoint=`\n`;
    let target = ` `;
    for(let i=0; i<cols;i++){
        for(let j=0; j<i; j++){
            target+=sharp;
        }
        target+=breakPoint;
        
    }
    return target
}
const result=piramida(cols,rows);
console.log(result);
console.log(`####################################################################################`);

const cols1=prompt(`cols:`);
const rows1=prompt(`rows1`);

function piramid1(cols, rows){
    const sharp1 =`@`;
    const breakPoint1=`\n`;
    const space1 = ` `;
    let target=``;
    for(let i=0; i<cols1; i++){
        for (let k=0; k<rows1; k++){
            if ((i+k)%2===0){
                target+=sharp1;
            } else{ target+= space1;
            }
        } target+=breakPoint1;
       
    }
    return target;
}
const result1=piramid1(cols,rows);
console.log(result1);





