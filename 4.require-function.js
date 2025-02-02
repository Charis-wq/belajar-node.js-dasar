//require function

/*-awal ketikan nodejs di rilis javascript belum di rilis namun sekarang javascript sudah banyak menggunakan javascript modules
-nodejs pun awalnya juga tidak menggunakan javascript modules namun sekarang sudah menggunakan javascript modules dan sangat di rekomendasikan menggunakanya 
-namun sebelumnya modules nodejs menggunakan function require() untuk melakukan ipmort file 
-dan jika menngunakan require() tidak perlu mengganti file.js
ke file.mjs
*/

const os = require('os');

console.log(os.platform());
console.table(os.cpus());