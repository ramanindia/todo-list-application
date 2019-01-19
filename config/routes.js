var home = require('../app/controllers/home');

//you can include all your controllers

module.exports = function (app)
 {
	 app.get('/items', home.itemslist);
     app.post('/saveitem', home.saveitem);
     app.post('/markitem', home.markitem);
     app.post('/deleteitem', home.deleteitem);
   

}
