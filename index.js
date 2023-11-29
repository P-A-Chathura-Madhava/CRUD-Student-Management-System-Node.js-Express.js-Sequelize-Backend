const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/routes.js')
const {sequelize, connectToDb} = require('./config/db.js')
const body_parser = require('body-parser');


const app = express();
const PORT = 8080;

app.use(cors());

// app.use(body_parser);
app.use(express.json());
app.use('/api', apiRoutes);

app.use((req, res) => {
    res.status(404);
    res.json({message: 'Resource not found'})
})

app.use((req, res) => {
    res.status(500);
    res.json({message: 'Something went wrong'})
})

app.get('/', (req, res) => {
    res.status(200).json({message: 'server response'})
})

app.listen(PORT, async ()=>{
    console.log(`server running on port : ${PORT}`);
    await connectToDb();
})