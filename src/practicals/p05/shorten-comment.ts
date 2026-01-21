const comment = "TypeScript is a strongly typed programming language"
const re = short

export function shortenComment(comment: string): string {
  // Write your code below
  const text: string = comment;
  const op: string[] = text.split(" ");
  const inf: string[] = [];

  for (const d of op){
    if(5<= d.length   && d.length <= 10){
      inf.push(d);

    }
  }
  let out = inf.join();
  return out;
  
}