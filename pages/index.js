import styles from '../styles/Home.module.css'
import FlightsContainer from '../components/FlightsContainer'
import Meta from '../components/Meta'
import { server } from '../config'
import fetch from 'node-fetch'

export default function Home({ flightData }) {
  
  return (

    <div className={styles.container}>
      <Meta title="Skyscanner" description="Full Stack Recruitment Test"/>
      <img className={styles.logo} src="/skyscannerLogo.png" alt="Skyscanner" />
      <FlightsContainer flights={flightData} />
    </div>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/flights`)
  const flightData = await res.json()

  return {
    props: { 
      flightData
    }
  }
}