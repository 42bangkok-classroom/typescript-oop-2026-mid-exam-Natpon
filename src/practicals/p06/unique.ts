function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  const out: number[] = [];
  for (const num of arr1 ){
    for (const nn of arr2){
      if(num !== nn){
        out.push(num)
      }
    }
    
    

  }
  return out;
}
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const anw : number[] = getUniqueNumbers(arr1,arr2);
console.log(anw);