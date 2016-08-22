var express = require('express')
var app = express()
app.set('port', (process.env.PORT || 5000));
var multer  =   require('multer');
var upload = multer()
app.use(express.static('uploadPage'))
app.get('/', (req, res)=>{
	// Here we serve the main page
	res.send()
})

app.post('/api/picupload', upload.single('userPhoto'), (req, res)=>{
	/* Here we process the image we have received, 
		In the front-end we should have the following form: 
	<form id       =  "uploadForm"
	     enctype   =  "multipart/form-data"    <- Other enctypes won't work with multer
	     action    =  "/api/picupload" 
	     method    =  "post"
		>
	<input type="file" name="userPhoto" />     <- This is the file that we upload, the name is 
												  indicated in the post routing

	<input type="submit" value="Upload File" name="submit">
	</form>
	*/
	var obj = {
		"size" : req.file.size
	}
	res.send(obj)
})


app.listen(app.get('port'), function() {
	  console.log('Node app is running on port', app.get('port'));
});

