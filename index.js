
let express = require('express')
let apiRoutes = require("./routes")

let app = express();
var port = process.env.PORT || 8080;
app.get('/', (req, res) => res.send('Welcome to Express'));

app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})

app.use('/api', apiRoutes)