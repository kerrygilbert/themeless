var config = require('../config');
var tumblr = require('tumblr');

module.exports = function(req, res) {
  var options = {};
  if(req.query.id) { options.id = req.query.id }
  var b = new tumblr.Blog(req.query.url , config.tumblr);

  b.posts(options, function (err, data) {
    console.log(data);

    if(err) { console.log(err) }
    res.render('post.html', {
      data: data
    });
  });
}