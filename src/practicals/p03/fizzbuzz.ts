// Write your code below
const input_p = Number(process.argv[2]);
if (input_p > 0) {
    for (let i = 1; i < input_p + 1; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
}