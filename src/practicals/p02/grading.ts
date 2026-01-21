// Write your code below
try {
    const input_p = Number(process.argv[2]);
    if(typeof input_p !== "number"){
        throw new Error("Invalid input");
    }
    if(input_p > 0 && input_p < 100){
        if(input_p < 50){
            console.log("Grade is F");
        }
        else if(input_p < 60){
            console.log("Grade is D");
        }
        else if(input_p < 70){
            console.log("Grade is C");
        }
        else if(input_p < 80){
            console.log("Grade is B");
        }
        else {
            console.log("Grade is A");
        }
    }
    else{
        console.log("Invalid input");
    }
}catch(err){
    console.log(err);
}