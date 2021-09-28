
function checkNumber(value) {
    if (value === 0 || value === 1){
        return (`Число ${value} не относится ни к простым ни к составным`)
    }
    if (2 <= value && value <= 1000 ) {
        let number = 0;
        for (i = 1; i < (value + 1); i = i + 1) {
            if (value % i === 0) {
                number = ++number;
            }
        }
        if (number === 2) {
            console.log(`Число ${value} простое`)
            return (`Число ${value} простое`)
        } else {
            console.log(`Число ${value} составное`)
            return (`Число ${value} составное`)
        }
    }else{
        return (`Ошибка данных`)
    }
}

checkNumber(111)