import style from '../styles/FlightsContainer.module.css'
import Itineraries from './Itineraries'

const FlightsContainer = ({ flights: {itineraries, legs} }) => {
    return (
        <div className={style.cardContainer}>
            {itineraries.map(itinerary => (
                <Itineraries itinerary={itinerary} legs={legs} key={itinerary.id} />
            ))}
        </div>
    )
}

export default FlightsContainer
