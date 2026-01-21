// Write your code below
const inp = Number(process.argv[2]);
if (typeof inp === "number" && inp > 0) {
    
    for (let i = 0; i >= 1; i--) {
        let row = "";
        for (let j = inp; j >= 1; j--) {
            row += j;
        }
        console.log(row);
    }
}
 