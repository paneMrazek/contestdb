var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/newuser', function(req, res, next) {
  res.render('NewUser', { title: 'New User' });
});

router.get('/writings', function(req, res, next) {
  res.render('SubmitWriting', { title: 'Writings' });
});

router.get('/listwritings', function(req, res, next) {
  res.render('Writings', { title: 'View Writings' });
});

router.get('/newcontest', function(req, res, next) {
  res.render('contest', { title: 'New Contest' });
});

router.get('/contests', function(req, res, next) {
  res.render('contestlist', { title: 'Contests' });
});


/*-------------------------------------------------------------
						GET 
-------------------------------------------------------------*/						
router.get('/getusers', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('users');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});
//
router.get('/getwritings', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('writings');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});
//
router.get('/getwriters', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('writers');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getcontestants', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contestants');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getcontests', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contests');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getpublishers', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('publishers');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getpublishedwritings', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('publishedwritings');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getratings', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('ratings');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getcontestwinners', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contestwinners');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});

router.get('/getadmins', function(req,res,next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('admins');
		collection.find(function(err, items){
			items.toArray(function(err, itemArr){
				res.writeHead(200,{'Content-Type': 'text/html'});
				res.end(JSON.stringify(itemArr));
			});
		});
	});
});



/*-------------------------------------------------------------
						Post 
-------------------------------------------------------------*/	
router.post('/user', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('users');
		console.log(req.body.userName);
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});
//
router.post('/postwriting', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('writings');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postwriter', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('users');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postcontestant', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contestants');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});
//
router.post('/postcontest', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contests');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postpublisher', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('publishers');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postpublishedwriting', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('publishedwritings');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postrating', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('ratings');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postcontestwinner', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('contestwinners');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

router.post('/postadmin', function(req, res, next){
	MongoClient.connect('mongodb://localhost/contestDB', function(err, db){
		var collection = db.collection('admins');
		collection.update({userName: req.body.userName},req.body, {upsert: true});

		console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('post received');
	});
});

module.exports = router;
