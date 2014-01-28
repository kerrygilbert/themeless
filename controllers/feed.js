var config = require('../config');
var tumblr = require('tumblr');

module.exports = function(req, res) {
  var options = {};
  if(req.body.tag) { options.tag = req.body.tag }

  var b = new tumblr.Blog(req.body.url , config.tumblr);

  b.posts(options, function (err, data) {
    if(err) { console.log(err) }
    res.render('feed.html', {
      data: data
    });
  });
}