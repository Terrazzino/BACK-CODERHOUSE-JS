const moment = require('moment')

let fechaActual = moment().format('l')
const fechaNacimiento = moment('1996-11-04').format('l')
let diaDeHoy = moment(fechaActual)
let añosTranscurridos = moment("19961104","YYYYMMDD").fromNow()
let diasTranscurridos = diaDeHoy.diff(fechaNacimiento,'days')

console.log(`Hoy es ${fechaActual}
Nací el ${fechaNacimiento}
Desde mi nacimiento han pasado ${añosTranscurridos}
Y ${diasTranscurridos} dias`)