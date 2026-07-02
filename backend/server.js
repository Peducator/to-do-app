const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const Authroutes = require('./src/routes/auth.routes');
const Listsroutes = require('./src/routes/lists.routes');
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
}));


require('dotenv').config();
app.use(express.json());

app.use(express.json());

app.use('/auth', Authroutes);
app.use('/lists', Listsroutes);

app.get('/', (req,res) =>{
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log('server is running at port ' + PORT);
});

