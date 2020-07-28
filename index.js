
const express = require('express');

const cors = require('cors');

const app = express();
app.use(cors()); // Use this after the variable declaration

app.options('*', cors());
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));




app.get('/api', (req, res) => {

    // do something

});

app.post('/api', (req, res) => {

    const data = request.body;

});

