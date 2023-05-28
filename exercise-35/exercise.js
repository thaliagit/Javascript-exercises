
function repeatHello(callback){
    let repeat = setInterval(callback, 1000);
};
const sayHello = () => console.log(`Hello`);
repeatHello(sayHello);
