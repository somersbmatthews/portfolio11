const port = 3001;

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// import method override
const methodOverride = require('method-override')
//  implement body parser to use req.body later
app.use(bodyParser.urlencoded({
	extended: true
}))
// connects mongoose
//mongoose.connect("mongodb://localhost:27017/Authors")
// middleware that uses method-override module to allow things not allowed in HTML5
app.use(methodOverride('_method'));
// middleware that uses express.static to share 
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.get('*', (req, res) => {
	res.send("error, route is wrong")
})

app.listen(3001, () => {
	console.log("listening on port " + 3001)
})