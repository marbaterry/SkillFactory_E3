const bar =  function baz (a, b){
    console.log(a)
    if (a < b){
        setTimeout(baz, 1000, a+1, b)
    }
}

bar(1,7)
