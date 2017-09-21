const axios = require('axios');


module.exports = require('express').Router()

.get('/node', (req,res,next) => {

  axios.get('https://api.meetup.com/Chicago-NodeJs/events?&sign=true&photo-host=public&page=3')
  .then(res => res.data)
  .then(ok => {
    // console.log(ok);
    res.json(ok);
  })
  .catch(error => console.error('error /meetup/node'));
})
.get('/js', (req,res,next) => {

  axios.get('https://api.meetup.com/js-chi/events?&sign=true&photo-host=public&page=3')
  .then(res => res.data)
  .then(ok => {
    // console.log(ok);
    res.json(ok);
  })
  .catch(error => console.error('error /meetup/js'));
})
.get('/react', (req,res,next) => {

  axios.get('https://api.meetup.com/React-Chicago/events?&sign=true&photo-host=public&page=3')
  .then(res => res.data)
  .then(ok => {
    // console.log(ok);
    res.json(ok);
  })
  .catch(error => console.error('error /meetup/react'));
})
.get('/ang', (req,res,next) => {

  axios.get('https://api.meetup.com/AngularJS-Chicago/events?&sign=true&photo-host=public&page=3')
  .then(res => res.data)
  .then(ok => {
    // console.log(ok);
    res.json(ok);
  })
  .catch(error => console.error('error /meetup/ang'));
})
