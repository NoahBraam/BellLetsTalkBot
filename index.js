var Twit = require('twit')
var c = 0.00;
var T = new Twit({
    consumer_key:         'jKmd7tILOaTwLmDQ3OfnRlj22',
    consumer_secret:      'GS7qq0yxXtB7KwWpSV39n7BnydZxIhzMyxQVJi8knq7vnmx1bv',
    access_token:         '1090715861617324032-BG4aeRkLBRKaTRJbWayLIKHD3Ix8Dm',
    access_token_secret:  'cneZjZJxKOpp7ZgGCauvko3Km5hJW1hfesoihjnf7PRFJ',
})

function tweetFunc() {
  c+= 0.05;
  T.post('statuses/update', { status: 'This bot has donated $' + c + ' for #BellLetsTalk'  }, function(err, data, response) {
    console.log(data);
  })
}

setInterval(tweetFunc, 60000);
