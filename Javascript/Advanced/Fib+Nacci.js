function fib(){
    var sum1 = 0;
    var sum2 = 1;
    function nacci(){
        var temp = sum2
        console.log(sum2)
        sum2 = sum1+sum2;
        sum1 = temp
        return sum2;
    }
    
    return nacci;
}

var fibCounter = fib();

for (let i=0; i<20; i++){
    fibCounter()
}