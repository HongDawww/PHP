// random() : 0 이상 1미만의 랜덤한 수를 리턴
Math.random() * 10;

Math.ceil(3.5);
Math.round(3.5);
Math.floor(3.5);



// console.log('루프시작');
// Math.ceil((Math.random() * 10));

// for(let i = 0; i < 1000000; i++ ){
//     let ran = Math.ceil((Math.random() * 10));
//     if(ran < 1 || ran > 10){
//         console.log('이상한 숫자');
//     }
// }
// console.log('끝');

let arr = [1,2,3];
Math.min(...arr);
Math.max(arr);
