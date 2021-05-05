import styles from '../styles/Home.module.css'
import FlightsContainer from '../components/FlightsContainer'
import Meta from '../components/Meta'
import { server } from '../config'
import fetch from 'node-fetch'

export default function Home({ flightData }) {
  const {itineraries, legs} = flightData;

  return (

    <div className={styles.container}>
      <Meta title="Skyscanner" description="Full Stack Recruitment Test"/>
      <img className={styles.logo} src="/skyscannerLogo.png" alt="Skyscanner" />
      <FlightsContainer itineraries={itineraries} legs={legs}/>
    </div>
  )
}

export async function getServerSideProps () {
  try {

    const res = await fetch(`${server}/api/flights`)
    const flightData = await res.json();

    console.log(flightData)
    return {
      props: { 
        flightData
      }
  }
  } catch (err) {
    console.error(err);
    return {
      props: {
        flightData: {}
      }
    }
  }
}