module.exports = function (app, options) {  

  app.get('/', require('../controllers/index'));
  app.get('/feed', require('../controllers/feed'));
  app.get('/post', require('../controllers/post'));

}