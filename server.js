const express = require('express')
const bodyParse = require('body-parser')
// const { readdirSync } = require('fs') 


const app = express()



// readdirSync('./Router').
//     map((r) => app.use('/vendor', require('./Router' + r)))
// อ่านทั้งไฟล์แต่ต้องทำโมเดลใหม่


app.listen(3050, () => console.log('Vendor Run!'))