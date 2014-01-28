module.exports = function (app, options) {  

  app.get('/', require('../controllers/index'));
  app.post('/feed', require('../controllers/feed'))

}