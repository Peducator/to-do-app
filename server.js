const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Authroutes = require('./src/routes/auth.routes');

app.use(express.json());

app.use('/auth', Authroutes);

app.get('/', (req,res) =>{
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log('server is running at port ' + PORT);
});

