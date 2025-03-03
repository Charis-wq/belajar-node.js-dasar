/*buffer endcoding 
buffer juga bisa di gunakan untuk melakukan endcoding dari satu endcoding ke endcoding yang lain 
ada banyak endcoding yang didukung oleh bufffer misalnya
utf8,ascii,hex,base64.base64URL dan lain-lain */

const buffer = Buffer.from('Abdul Charis', 'utf8');


console.log(buffer.toString());
console.log(buffer.toString('hex'));
console.log(buffer.toString('ascii'));
console.log(buffer.toString('base64'));

const base64Buffer = Buffer.from('QWJkdWwgQ2hhcmlz', 'base64');

console.log(base64Buffer.toString('utf8'));