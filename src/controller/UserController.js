import UserService from "../service/UserService.js"
import client from "../config/RedisConnection.js"

export default class UserController{

    userService = new UserService

    getAll = async (req,res)=>{
        try {
            const data = await this.userService.getAll()

            client.set('users',JSON.stringify(data))

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
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    update = async (req,res) =>{
        try {
            const data = await this.userService.update(req,res)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    
    delete = async (req, res)=>{
        try {
            const user = await this.userService.delete(req,res)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}