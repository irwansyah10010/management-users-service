import UserService from "../service/UserService.js"
import client,{ redisGetAsync } from "../config/RedisConnection.js"


export default class UserController{
    
    userService = new UserService

    keyUser = 'users'

    getAll = async (req,res)=>{
        try {
                       
            let data = await client.get(this.keyUser)

            if(!data){
                data = await this.userService.getAll()
                
                client.set(this.keyUser, JSON.stringify(data))
                console.log(`data redis ${this.keyUser} ditambahkan`)
            }else{
                data = JSON.parse(data)
                console.log(`data redis ${this.keyUser} digunakan`)
            }

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    getById = async (req,res) => {
        try {
            const data = await this.userService.getById(req,res)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    getByAccountNumber = async (req,res) => {
        try {
            const data = await this.userService.getByAccountNumber(req,res)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    getByIdentityNumber = async (req,res) => {
        try {
            const data = await this.userService.getByIdentityNumber(req,res)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    save = async (req,res)=>{
        try {
            const data = await this.userService.save(req,res)

            client.del(this.keyUser)

            console.log(`data redis ${this.keyUser} dihapus`)

            res.status(201).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    update = async (req,res) =>{
        try {
            const data = await this.userService.update(req,res)

            client.del(this.keyUser)
            console.log(`data redis ${this.keyUser} dihapus`)

            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    delete = async (req, res)=>{
        try {
            const user = await this.userService.delete(req,res)

            client.del(this.keyUser)
            console.log(`data redis ${this.keyUser} dihapus`)

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}