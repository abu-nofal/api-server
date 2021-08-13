'use strict'

require('dotenv').config();

const {start}=require('./src/server');
const {db} = require('./src/models/index');
const PORT=process.env.PORT



db.sync().then(()=> {
    start(PORT|| 8080);
})
.catch(console.error);
