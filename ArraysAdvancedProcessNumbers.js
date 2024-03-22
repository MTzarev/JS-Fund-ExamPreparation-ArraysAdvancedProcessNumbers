function processNumbers(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        if (i > 0 && i % 2 !== 0) {
            newArr.unshift(num * 2);
        }
    }
    console.log(newArr.join(` `));


}
processNumbers([3, 0, 10, 4, 7, 3]);