import styles from '../styles/Home.module.css'
import FlightsContainer from '../components/FlightsContainer'
import Meta from '../components/Meta'
import { server } from '../config'

export default function Home({ data }) {

  return (

    <div className={styles.container}>
      <Meta title="Skyscanner" description="Full Stack Recruitment Test"/>
      <img className={styles.logo} src="/skyscannerLogo.png" alt="Skyscanner" />
      <FlightsContainer flights={data} />
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`${server}/api/flights`)
  const data = await res.json()

  return {
    props: { data }
  }
}