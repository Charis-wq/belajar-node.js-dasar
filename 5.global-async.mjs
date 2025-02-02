//Global Async
/*-saat kita belajar javascript untuk menggunakan asycn await biasnya kita perlu membuat terlebih dahulu function yang kita tandai sebagai asycn
-saat kita menggunakan modules secara default global code adalah asycn oleh karena itu kita bisa menggunakan asyn await
-kecuali jika kita membuat function maka function tersebut harus kita tandai sebagai  asycn jika ingin mengggunakan async await.
*/



//contoh untuk file.mjs
function samplepromise(){
    return Promise.resolve('charis');
}

const name = await samplepromise();
console.log(name);

//contoh file.js
//function samplepromise(){
    //return Promise.resolve('charis');
//}

//async function run(){
  //  const name = await samplepromise();
//console.log(name);
//}

//run();