/*stream
stream adalah standard liberary untuk kontrak aliran data di nodejs
ada banyak sekali stram object di nodejs
stram bisa jadi object yang bisa di baca atau bisa di tulis dan stram adalah turunan dari evenemitter */

import fs from 'fs';

const writer = fs.createWriteStream('target.log');
writer.write('Abdul\n');
writer.write('Charis\n');
writer.end();

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) =>{
    console.info(data.toString())
})
