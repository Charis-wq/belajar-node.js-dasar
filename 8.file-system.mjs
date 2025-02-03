//File System
/*-file system merupakan standard liberary yang bisa digunakan untuk memanipulasi file system 
-dalam file system terdapat 3 jenis liberary
-pertama liberary yang bersifat blocking atau syncronus
-kedua liberary yang bersifat non-blocking atau asyncronus mengguakna callback 
-ketiga liberary yang bersifat non-blocking atau asyncronus tapi menggunakan promise */

import fs from 'fs/promises'

const buffer = await fs.readFile('8.file-system,mjs');
console.log(buffer.toString());

await fs.writeFile('temp.txt', 'Hello World');