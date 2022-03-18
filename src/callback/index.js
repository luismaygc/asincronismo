function sum(a, b) {
    return a + b;
}

function calc(a, b, callback){
    return callback(a,b);
}

console.log(calc(10, 15, sum));

function date(callback){
    console.log(new Date);
    setTimeout(() => {
        const date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);