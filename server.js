const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Authroutes = require('./src/routes/auth.routes');
const Listsroutes = require('./src/routes/lists.routes');

require('dotenv').config();
app.use(express.json());

app.listen(PORT, () => {
    console.log('server is running at port ' + PORT);
});

app.use('/auth', Authroutes);
app.use('/lists', Listsroutes);

app.get('/', (req,res) =>{
    res.send('hello world');
});

