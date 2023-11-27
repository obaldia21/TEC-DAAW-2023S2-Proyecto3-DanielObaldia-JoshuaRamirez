import { EventsModel } from "../models/EventsModels.js";

// Extraer todos los eventos disponibles

export const getEvents = async (req, res) => {
    try {
        const events = await EventsModel.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Extraer un evento por id

export const getEvent = async (req, res) => {
    
    try {
        const event = await EventsModel.findById(req.params.id);
        
        if (!event) {
            res.status(404).json({ message: `Event not ${id} found` });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
        
    }
    
}