import {User} from '../models/UserModels.js';

// ----------------------------- |Crear métodos para las peticiones| -----------------------------



// Crear método para extraer usuarios, utilizando mongoose y json

export const getUser = async (req,res) => {

    try{
        
        const users = await User.find();
        res.status(200).json(users);
        
    } catch(error) {
        res.status(500).json({message: error.message});

    }

}

// Crear método para extraer unicamente un usuario

export const getUserById = async (req,res) => {

    try{
        
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        
    } catch(error) {
        res.status(500).json({message: error.message});

    }


}

//  Crear método para crear un usuario, utilizando mongoose y json

export const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}


export const updateUser = (req, res) => {

    res.json({ msg: "updateUser" });

}

export const deleteUser = (req, res) => {

    res.json({ msg: "deleteUser" });

}