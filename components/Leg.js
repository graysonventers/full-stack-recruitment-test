import style from '../styles/Leg.module.css'

const Leg = ({ leg }) => {
    const {departure_airport, arrival_airport, departure_time, arrival_time, duration_mins, airline_id, airline_name, stops} = leg[0];

    // convert date and time to hours and minutes only
    const timeConversion = (time) => time.slice(time.indexOf('T') + 1)
    

    // convert minutes to hours and minutes
    const durationConversion = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = ((time / 60) % 1) * 60 === 0 ? '00' : Math.floor((time / 60) % 1 * 60)

        return (`${hours}h ${minutes}`)
    }

    // handle stops conditons
    const stopConditions = (stops) => {
        if (stops === 0) {
            return <span className={style.stopsGreen}>Direct</span>
        } else if (stops === 1) {
            return <span className={style.stopsRed}>1 Stop</span>
        } else if (stops > 1) {
           return <span className={style.stopsRed}>{`${stops} Stops`}</span>
        }
    }

    return (
        <div className={style.legRow}>
            <img className={style.logoImg} src={`https://logos.skyscnr.com/images/airlines/favicon/${airline_id}.png`} alt={`${airline_name} logo`} />
            <div className={style.legBox}>
                <span>{timeConversion(departure_time)}</span>
                <span className={style.airport}>{departure_airport}</span>
            </div>
            
            <span>
                <img className={style.arrowIcon} src="/right-arrow.png" alt="right arrow"/>
            </span>

            <div className={style.legBox}>
                <span>{timeConversion(arrival_time)}</span>
                <span className={style.airport}>{arrival_airport}</span>
            </div>
            <div className={style.legBox}>
                <span className={style.duration}>{durationConversion(duration_mins)}</span>
                {stopConditions(stops)}
            </div>

        </div>
    )
}

export default Leg