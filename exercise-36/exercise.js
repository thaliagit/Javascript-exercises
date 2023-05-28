function repeatHello(callback, n){
    let repeat = setInterval(callback, 1000);
    setTimeout(() => clearInterval(repeat), 1000 * n);
};
const sayHello = () => console.log(`Hello`);
repeatHello(sayHello, 5);
