import * as flights from '../../../flights.json'

// get single flight itinerary
export default function handler(req, res) {
    
    const filteredFlights = flights.itineraries.filter(flight => flight.id === req.query.id)

    if (filteredFlights.length > 0) {
        res.status(200).json(filteredFlights[0])
    } else {
        res.status(404).json({ message: `Itinerary with id of ${req.query.id} not found` })
    }
}