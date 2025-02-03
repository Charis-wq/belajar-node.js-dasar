//OS 

/*-OS merupakan standard liberary yang bisa di gunakan untuk mendapatkan informasi tentang opersi yang kita gunakan */

import os from 'os'

console.log(os.arch());

console.log(os.platform());
console.log(os.uptime());
console.table(os.cpus());
console.table(os.networkInterfaces());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.freemem());