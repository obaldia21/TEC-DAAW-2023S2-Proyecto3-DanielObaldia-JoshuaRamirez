import mongoose from 'mongoose';

// Crear Schema para usuarios
const UserSchema = new mongoose.Schema({

    // Atributos

    userName: {
        type: String,
        required: [true, "campo requerido"],
    },

    userEmail:{
        type: String,
        required: [true, "campo requerido"],
    },
    
    userPassword: {
        type: String,
        required: [true, "campo requerido"],
    },

    userRole: {
        type: String,
        required: [true, "campo requerido"],
    },

    userDirection: {
        type: String,
        required: [true, "campo requerido"],
    },

    userCreditCard: {
        type: String,
        required: [true, "campo requerido"],
    },


},

{
    timestamps: true,
    versionKey: false,
}
);


// Crear modelo a partir del Schema
export const User = mongoose.model('users', UserSchema);

