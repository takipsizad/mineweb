var express = require('express');
var router = express.Router();
const mineflayer = require('mineflayer')
var AutoAuth = require('mineflayer-auto-auth')
router.get('/', function(req, res, next) {
    res.jsonp({mesassage:"Aaaaaaaa"})
  });

router.get('/crackedlogin', function(req, res, next) {
  var bot = mineflayer.createBot({
    plugins: [AutoAuth],
    AutoAuth: req.query.password,
    host: req.query.ip, 
    port: 25565,
    username: req.query.username,
    version: false,
  })
bot.on('kicked', (reason, loggedIn) => console.log(reason, loggedIn))
bot.on('error', err => console.log(err))
bot.on('serverAuth', function() {
  console.log('^login')
});
});

  module.exports = router;