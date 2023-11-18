import mongoose from 'mongoose';

// Crear Schema
const UserSchema = new mongoose.Schema({

    // Atributos

    nombre: {
        type: String,
        required: [true, "Intendando volver?"],
    },

    email:{
        type: String,
        required: [true, "Intendando volver?"],
    }



});

// Crear modelo a partir del Schema
export const User = mongoose.model('User', UserSchema);
