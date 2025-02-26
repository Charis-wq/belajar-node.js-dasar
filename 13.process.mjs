/*process merupakan standardt liberary yang digunakan untuk mendapatkan informasi process nodejs yang sedang berjalan
process juga merupakan instance dari EvenEmmiter sehingga kita bisa menambahkan listener kedalam process*/

import process, { exitCode } from 'process';

process.addListener('exit', (exitCode) => {
    console.log(`NodeJS exit white code ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);
console.log(process.arch);
console.table(process.report);
console.table(process.anv);

process.exit(1);

console.og('Hello')//ini tidak akan keluar karna kita suadah exit  