import * as flights from '../../../flights.json'

// get all flight itineraries
export default function handler(req, res) {
    res.status(200).json(flights)
}