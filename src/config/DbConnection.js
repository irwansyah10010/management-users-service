import mongoose from "mongoose"
import 'dotenv/config'



mongoose.connect(process.env.URI_MONGO,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB', err))

export default mongoose