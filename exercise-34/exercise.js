function hello(){
    console.log(`Hello`);
}

function printAsyncName(callback, name){
   let printHello = setInterval(callback, 1000);
    setTimeout(() => {
        console.log(name);
        clearInterval(printHello);
    }, 2000);
}


printAsyncName(hello, `Ted`);
