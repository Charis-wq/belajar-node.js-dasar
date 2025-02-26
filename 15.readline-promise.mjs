/*ini contoh untuk readline promisesnya  */

import process from "process";
import  Readline  from "readline/promises";

const rl = Readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

const main = async (answer) =>{
    answer = await rl.question('what is your name?')
    console.log(`hello ${answer}`)
    rl.close()
}

main()