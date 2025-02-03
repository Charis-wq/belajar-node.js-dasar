//PATH

/*-path merupakan standard liberary yang bisa kita gunakan untuk bekerja dengan lokasi file dan directory/folder */

import path from "path";

const file = "/User/contoh.txt";

console.log(path.sep);
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.parse(file));