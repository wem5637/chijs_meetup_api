'use strict'
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const PrettyError = require('pretty-error')
const finalHandler = require('finalhandler')
const morgan = require('morgan');

const app = express()


module.exports = app

  // Body parsing
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

  // Morgan
  .use(morgan('dev'))

  // let that Cross-Origin stuff through
  .use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X_Requested-With, Content-Type, Accept");
    next();
  })

  // Serve our api
  .use('/api', require('./api'))

  // Error middleware interceptor, delegates to same handler Express uses.
  .use((err, req, res, next) => {
    res.send(console.error(err))
  })

  // start server
  .listen(process.env.PORT||3001, console.log('listening on 3001!'))

