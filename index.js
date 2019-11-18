const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require("fs");

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dirApi = "./services";
const fileApi = fs.readdirSync(dirApi);
for (let i = 0; i < fileApi.length; i++) {
  let nameService = fileApi[i];
  let pathService = `${dirApi}/${nameService}/${nameService}_api.js`;
  console.log(pathService);
  if (fs.existsSync(pathService)) {
      let api = require(pathService);
      api(app, `/api/${nameService}`);
  }
}

app.listen(8000, () => {
    console.log('Server started!')
})