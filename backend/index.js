//import
express = require('express')
var cors=require('cors')
require('./connection')
const employeeModel=require('./model/employee')

//initialize
var app = express()

//midd
app.use(express.json());
app.use(cors())

//api creation

app.get('/', (req, res) => {
    res.send("messeage from server")
})
app.get('/trial', (req, res) => {
    res.send("This is a trial messeage")
})
// api to add data to db
app.post('/add', async (req, res) =>{
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
// api to view data from db
app.get('/view', async (req, res) => {
    let result = await employeeModel.find();
    res.json(result);
})


//port setting
app.listen(3004, () => {
    console.log('listening on port 3004')
})
