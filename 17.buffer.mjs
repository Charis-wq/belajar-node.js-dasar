/*buffer merupakan object yang berisikan urutan byte dengan panjang tetap 
buffer merupakan turunan darii tipe data Uint8Array  */

const buffer = Buffer.from("Abdul Charis");

console.log(buffer);
console.log(buffer.toString());

buffer.reverse();
console.log(buffer.toString());