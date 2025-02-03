//Debugger
/*-nodejs memiliki fitur debugger dimana kita bisa mengikuti tahapan eksekusi program di node.js
-hal ini sangat cocok 
ketika kita melakukan proses debugging mencari sebab masalah yang terjadi di aplikasi  */

//Breakpoint
/*-dalam debugging terdapat istilah breakpoint yaitu lokasi dimana kita ingin meghentikan sementara 
eksekusi kode program 
-biasanya ini di lakukan untuk mengawasi data-data di sekitar lokasi beerhentinya tersebut
-untuk menambahka breakpoint kita bisa menngunakan kata kunci debugger */

//Menjalankan mode gebug
/*-jika kita menjalankan file javascript hanya dengan menggunakan perintah node namafile.js maka secara default ini tidak akan menjalankan mode debug 
-agar jalan dalam mode debug kita harus menambahkan perintah (inspect) node inspect namafile.js */

//Perintah debugger
/*-saat masuk mode debug ada beberapa perintah yang bisa kita gunakan dalam melakukan debug:
-cont,c:continue execution
-next,n:step next
-step,s: step in
-out,o:step out
-pause:pause running code */

function sayHello(name){
    debugger;
    return `Hello ${name}`;
}

const firstName = 'Charis';
debugger;
console.log(sayHello(firstName));

