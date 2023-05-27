function sum(...numbers) {
    let total = 0;
    for(let i in numbers){
        total += numbers[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));