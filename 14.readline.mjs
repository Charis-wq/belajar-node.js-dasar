/*readline merupakan standardt liberary yang digunakan untuk membaca input 
namun pada saat ini readline hanya mendukung versi callback di versi NodeJS LTS 16.
di NodeJS 17 sudah mendukung promise sehingga lebih mudah di gunakan namun itupun masih dalam tahap experimental.  */

import process from "process";
import  Readline  from "readline";

const input = Readline.createInterface( {
    input: process.stdin,
    output: process.stdout,
});

input.question('Siapa nama anda?', (name) =>{
    console.log(`Hello ${name}`)
    input.close()
});


