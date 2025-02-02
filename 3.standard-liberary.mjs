//Modules

/*-standard liberary yang terdapat di nodejs bisa kita gunakan layaknya javascript Modules 
-karena nodejs menggunakan modules jika ita ingin menggunakan modules kita juga perlu memberi tahu bahwa file javascript kita menggunakan modules caranya dengan mengubah nama file dari.js menjadi .mjs
*/

import os from 'os'

console.log(os.platform());
console.table(os.cpus());