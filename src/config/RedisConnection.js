import { createClient } from 'redis'

const client = createClient()

client.connect()
.then(()=>{
    console.log("redis server connected");
})
.catch((err)=>{
    console.log("Error redis connection",err);
})

export default client