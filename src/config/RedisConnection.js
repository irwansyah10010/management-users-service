import { createClient } from 'redis'
import 'dotenv/config'
import { promisify } from 'util'

const client = createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
})

client.connect()
.then(()=>{
    console.log("redis server connected");
})
.catch((err)=>{
    console.log("Error redis connection",err);
})

export const redisGetAsync = promisify(client.get).bind(client)

export default client