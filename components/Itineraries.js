import style from '../styles/Itineraries.module.css'

import Link from 'next/link'
import Leg from './Leg'

const Itineraries = ({ itinerary, legs }) => {
    
    return (
        <div className={style.card}>
            
            {itinerary.legs.map(legItem => (
                <Leg key={legItem} leg={legs.filter(item => item.id === legItem)} />
            ))}

            <div className={style.bottomRowInfo}>
                <div className={style.priceAndName}>
                    <span className={style.price}>{itinerary.price}</span>
                    <span className={style.airline}>{itinerary.agent}</span>
                </div>
                <Link href="/itinerary/[id]" as={`/itinerary/${itinerary.id}`}>
                    <button className={style.button}>Select</button>
                </Link>
            </div>
        </div>
    )
}

export default Itineraries
