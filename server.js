const express = require('express');
const app = express();
const port = 5003;

app.use(express.json());

app.listen(port, function () {
  console.log(`Server is running in port : ${port}`);
});

// Routes
const Routes = require('./routes/index');
app.use('/api/v1', Routes);
