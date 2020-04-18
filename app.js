let express = require('express');
let app = express();
let port = 3000

// Import all the fuckin route here lmao
var home = require('./routes/Home/home.js');
app.use('/api/', home);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))