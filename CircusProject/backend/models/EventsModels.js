import mongoose from "mongoose";

// Crear Schema para eventos

const EventSchema = new mongoose.Schema({

    // Atributos
    eventName: {
        type: String,
        required: [true, "Intendando volver?"],
    },

    eventDate: {
        type: Date,
        required: [true, "Intendando volver?"],
    },

    eventLocation: {
        type: String,
        required: [true, "Intendando volver?"],
    },


    eventSynopsis: {
        type: String,
        required: [true, "Intendando volver?"],
    },

    eventPrice: {
        type: Number,
        required: [true, "Intendando volver?"],
    },

    eventArtist: {
        type: String,
        required: [true, "Intendando volver?"],
    },

},
{
    timestamps: true,
    versionKey: false,
}

);

export const EventsModel = mongoose.model('events', EventSchema);