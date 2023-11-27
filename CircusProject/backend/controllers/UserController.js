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
    console.log(req.body); 

    try{
        const user = await User.create(req.body);
        
        res.status(201).json(user);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}


// Método para iniciar sesión

export const loginUser = async (req, res) => {
    try {
        // Asegúrate de que recibes el email y password correctamente
        const email = req.body.email;
        const password = req.body.password;


        // Buscar al usuario por su email
        const user = await User.findOne({ userEmail: email });

        // Verificar si se encontró el usuario
        if (!user) {
            return res.status(401).json({ message: 'Autenticación fallida. Usuario no encontrado.' });
        }

        // Comparar la contraseña proporcionada con la almacenada en la base de datos
        const isMatch = password === user.userPassword;

        // Si las contraseñas no coinciden, enviar un error
        if (!isMatch) {
            return res.status(401).json({ message: 'Autenticación fallida. Contraseña incorrecta.' });
        }

        // Si la autenticación es exitosa, enviar confirmación
        res.status(200).json({ message: 'Inicio de sesión exitoso', user });

    } catch (error) {
        res.status(500).json({ message: 'Error del servidor: ' + error.message });
    }
};

