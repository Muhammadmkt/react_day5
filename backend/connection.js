var mongoose = require('mongoose')
mongoose.connect("mongodb+srv://muhammadabdullamkt:muhammad@cluster0.z7j5r1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Connected")
    })
    .catch((err) => {
    console.log(err)
})