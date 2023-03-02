const express = require('express');
const usersRouter = require("./routes/users.js");
const app = express();
const port = 3002;
const connect = require("./schemas/index.js");
connect;

app.use(express.json());
app.use('/users', usersRouter);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


app.listen(port, () => {
    console.log(port, '포트로 서버를 연결')
})