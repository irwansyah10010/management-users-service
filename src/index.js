import  express  from "express"

import routerUser from "./routes/UserRoute.js"

import cors from "cors"
import mongoose from "mongoose"


// mongo
mongoose.connect('mongodb://127.0.0.1:27017/db_irwansyah_betest',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err))


// app express
const app = express()
const port = 3000

//middleware
app.use(cors())
app.use(express.json())

// set routing
app.use("/users",routerUser)

// running
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})