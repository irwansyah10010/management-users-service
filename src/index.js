import  express  from "express"

import routerUser from "./routes/UserRoute.js"
import m from "./config/DbConnection.js"

import cors from "cors"


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