const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});