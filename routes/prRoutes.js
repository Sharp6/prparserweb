var express = require('express');
var router = express.Router();
var validator = require('../prParser');

router.get('/', function(req, res, next) {
  res.render('upload', { title: 'PRMV' });
});

router.post('/upload', function(req, res) {
	var modelFile;
 
	if (!req.files) {
		res.send('No model file was uploaded.');
		return;
	}

	var report = validator.validate(req.files.prModel.data.toString());
	res.render('report', {report: report});
});


module.exports = router;
