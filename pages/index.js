import styles from '../styles/Home.module.css'
import FlightsContainer from '../components/FlightsContainer'
import Meta from '../components/Meta'
import { server } from '../config'

// import data for hard coding
// import flights from '../flights.json'


export default function Home({ flightData }) {
  console.log(flightData)
  const {itineraries, legs} = flightData;

  return (

    <div className={styles.container}>
      <Meta title="Skyscanner" description="Full Stack Recruitment Test"/>
      <img className={styles.logo} src="/skyscannerLogo.png" alt="Skyscanner" />
      <FlightsContainer itineraries={itineraries} legs={legs}/>
    </div>
  )
}

// Hard Coded Data

// export async function getStaticProps(context) {
//   try {
//     const res = flights;

//     return {
//       props: {
//         flightData: flights
//       }
//     }
//   } catch (err) {
//       console.error(err)
//   }
// }

export async function getServerSideProps () {
  try {

    const res = await fetch(`${server}/api/flights`)
    const flightData = await res.json();

    return {
      props: { 
        flightData
      }
  }
  } catch (err) {
    console.error(err);
    return {
      props: {}
    }
  }
}