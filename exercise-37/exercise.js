
const number = 15;
let myPromise = new Promise((resolve, reject)=> {
    if (number > 10){
        resolve(number);
    }else {
        reject(number);
    }

})

myPromise
.then((val)=> console.log(val))
.catch((err)=> console.error(err))
