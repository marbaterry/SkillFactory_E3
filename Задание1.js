let arr = [2, 2, 2, 1, 1, 'a', 'a', 0, 0, 0];

function checkArr() {
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i = i + 1){
        if (typeof(arr[i]) === 'number' && !isNaN(arr[i] )) {
            if (arr[i] === 0) {
                zero = ++zero;
            } else if ((arr[i]) % 2 === 0) {
                even = ++even;
            } else {
                odd = ++odd;
            }
        }else{
            i++;
        }
    }
    console.log("В списке " + zero + " нулей, " + even + " четных и " + odd + " нечетных чисел")
}

checkArr(arr);