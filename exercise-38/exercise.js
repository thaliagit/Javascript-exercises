const isLogged = true;
function isLoggedIn(isLogged){
    return new Promise((resolve,reject) =>{
        let random = Math.random();
            if (isLogged === true){
                resolve(random);
            } else{
                reject(new Error(`User is offline`))
            }
    })
}
function userData(random){
    return new Promise((resolve, reject) => {
        if (random > 0.5){
            resolve({"name": "John", "age": 24})
        } else {
            reject(new Error(`there is an error with the user's data`))
        }
    })
}

isLoggedIn(isLogged)
  .then((random) => userData(random))
  .then((info) => console.log(info))
  .catch((err) => console.error(err));