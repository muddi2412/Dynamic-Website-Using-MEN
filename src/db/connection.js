const mongoose = require('mongoose');
// creating a database 
mongoose.connect('mongodb://localhost:27017/dynamicwebsiteprac',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successfull');
}).catch((error)=>{
    console.log(error);
})