import mongoose from "mongoose";


// Crear schema para compra de tickets

const TicketSchema = new mongoose.Schema({

    // Atributos
    ticketEvent: {
        type: String,
        required: [true, "Intendando volver?"],
    },

    ticketPrice: {
        type: Number,
        required: [true, "Intendando volver?"],
    },

    ticketDate: {
        type: Date,
        required: [true, "Intendando volver?"],
    },

    tickerHour: {
        type: String,
        required: [true, "Intendando volver?"],
    },

    ticketUser: {
        type: String,
        required: [true, "Intendando volver?"],
    },


},
{
    timestamps: true,
    versionKey: false,
}
);

export const OrdersModel = mongoose.model('Orders', TicketSchema);