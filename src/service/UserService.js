import User from "../model/User.js"

export default class UserService{

    getAll = async (req,res)=>{
        let user = []

        return new Promise((resolve,reject)=>{
            user = User.find()

            resolve(user)
        })
    }
    
    getById = async (req,res) => {
        return new Promise((resolve,reject)=>{
            let getOne = null
        
            try {
                getOne = User.findById(req.params.id)

                resolve(getOne)
            } catch (error) {
                resolve(error.message)
            }
        })
    }
    
    save = async (req,res)=>{

        return new Promise((resolve,reject)=>{
            const user = new User(req.body)
            let saveData = null

            try {
                saveData = user.save()

                resolve(saveData)
            } catch (error) {
                resolve(error.message)
            }
        })
    }
    
    update = async (req,res) =>{
        return new Promise((resolve,reject)=>{
            const user = User.findById(req.params.id)

            let updated = null

            if(product){
                try {
                    updated = User.updateOne({_id:req.params.id}, {$set: req.body})

                    resolve(updated)
                } catch (error) {
                    resolve(error.message)           
                }
            }
        })
    }
    
    delete = async (req, res)=>{
        return new Promise((resolve,reject)=>{
            const user = User.findById(req.params.id)
            let deleted = null

            if(user){
                try {
                    deleted = User.deleteOne({_id:req.params.id})

                    resolve(deleted)
                } catch (error) {
                    resolved(error.message)             
                }
            }
        })
    }

    getByAccountNumber = async (req,res)=>{
        return new Promise((resolve,reject)=>{
            let user = User.find({accountNumber:req.params.accountNumber})

            try {
                user = User.find({accountNumber:req.params.accountNumber})

                resolve(user)
            } catch (error) {
                resolve(error.message)
            }
        })
    }

    getByIdentityNumber = async (req, res) =>{

        return new Promise((resolve,reject) => {
            let user = null

            try {
                user = User.find({identityNumber:req.params.identityNumber})

                resolve(user)
            } catch (error) {
                resolve(error.message)
            }
        })
    }
}