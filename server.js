var express = require('express');
var app = express();
const usersRouter = require('./Routes/usersRoutes');
const router = express.Router();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));


const db = require('./db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})

app.get('/users', usersRouter)
app.post('/register', usersRouter);
app.get('/find/:id', usersRouter)
app.put('/update/:id', usersRouter)
app.delete('/delete/:id', usersRouter)







app.listen(3000);
console.log('Listening to PORT 3000');