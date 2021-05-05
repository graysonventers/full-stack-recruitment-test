import style from '../../styles/ItinerarySelection.module.css'

import Meta from '../../components/Meta'
import { useRouter } from 'next/router'

const itinerary = () => {
    const router = useRouter();

    return (
        <div className={style.container}>
            <Meta title="Flight Selection" description="Flight Selected"/>
            <span>{`Flight ID '${router.query.id}' Selected`}</span>
            <button className={style.button} onClick={() => router.back()}>Go Back</button>
        </div>
    )
}

export default itinerary