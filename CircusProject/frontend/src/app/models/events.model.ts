
// show events
export interface Events {
    _id: string,
    eventName: string,
    eventDate: string,
    eventLocation: Date,
    eventSynopsis: string,
    eventPrice: number,
    eventArtist: string,
    picture: string
}

// show only one event

export interface Event {
    _id: string,
    eventName: string,
    eventDate: string,
    eventLocation: Date,
    eventSynopsis: string,
    eventPrice: number,
    eventArtist: string,
    picture: string
}


