// Database to store data, don't forget autoload: true
var Datastore = require('nedb');
var db = new Datastore({
		filename: "data.db",
		autoload: true
}); //without autoload, we won't write the data to disk



// Create a JavaScript Object with data to store
var datatosave = {
	// name: "Blah Blah",
	// message: "Hello world"
};

// Insert the data into the database
db.insert(datatosave, function (err, newDocs) { // an error-first callback
	console.log("err: " + err);
	console.log("newDocs: " + newDocs);
});

// Find all of the existing docs in the database
db.find({}, function(err, docs) {
	// Loop through the results, send each one as if it were a new chat message
	for (var i = 0; i < docs.length; i++) {
		console.log(docs[i].name + " " + docs[i].message);
	}
});
