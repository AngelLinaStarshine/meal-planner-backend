const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors')

require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 7000 || process.env.PORT


app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes);


app.listen(PORT, () => {
    console.log(`Im listening on POTRT ${PORT}`)
})


//angelo4ekstar7
//UpAXatCkVrviU7y5
//mongodb+srv://angelo4ekstar7:UpAXatCkVrviU7y5@cluster0.lb4l85d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0