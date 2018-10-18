const axios = require('axios');

//add to meetupOrgs to have them included in request
const meetupOrgs = [
  'Chicago-NodeJs',
  'React-Chicago',
  'js-chi'
]

let events = []
let groups = []

function getEventInfo() {
  const mtpReqs = meetupOrgs.map((meetup) => {
    return axios.get(`https://api.meetup.com/${meetup}/events?&page=3`)
  })
  Promise.all(mtpReqs)
    .then((evts) => {
      evts = evts.map((mtp) => {
        return mtp.data
      });
      evts = [].concat.apply([], evts).sort((a, b) => { return a.time - b.time });

      events = evts;
    })
    .catch(error => console.error('error /meetup/js'));
}

function getGroupInfo() {
  const mtpReqs = meetupOrgs.map((meetup) => {
    return axios.get(`https://api.meetup.com/${meetup}`)
  })
  Promise.all(mtpReqs)
    .then((grps) => {
      grps = grps.map((mtp) => {
        return mtp.data
      });

      groups = grps;
    })
    .catch(error => console.error('error /meetup/js'));
}

getGroupInfo()
getEventInfo()
var CronJob = require('cron').CronJob;

//run hourly
new CronJob('0 0 * * * *', function() {
  getGroupInfo()
  getEventInfo()
}, null, true, 'America/Los_Angeles');


module.exports = require('express').Router()

  .get('/events', (req, res, next) => {
    res.json(events)
  })

  .get('/groups', (req, res, next) => {
    res.json(groups)
  })