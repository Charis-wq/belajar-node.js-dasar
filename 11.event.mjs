/*Event adalah standardt liberary yang bisa di gunakan sebaga implementasi event listener
di dalam event terdpat sebuah class bernama EventEmitter yang bisa di gunakan untuk menampung data listener per jenis event 
lalu  kita bisa melakukan emmit untuk mentriger jenis event dan mengirim data ke event tersebut */

import {EventEmitter} from 'events'

const emitter = new EventEmitter();
emitter.addListener('hello', (name) =>{
    console.log(`hello ${name}`)
})

emitter.addListener('hello', (name) =>{
    console.log(`hai ${name}`)

})

emitter.emit('hello','charis');