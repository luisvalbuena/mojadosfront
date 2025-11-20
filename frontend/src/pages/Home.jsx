import React from 'react'
import Hero from '../components/Home/Hero'
import Benefits from '../components/Home/Benfits'
import Models from '../components/Home/Models'
import Prices from '../components/Home/Prices'
import Location from '../components/Home/Location'
import ReservationProcess from '../components/Home/ReservationProcess'
import FAQ from '../components/Home/FAQ'
import Contact from '../components/Home/Contact'
export default function Home() {
  return (
    <>
    <Hero/>
    <Benefits/>
    <Models/>
    <Prices/>
    <Location/>
    <ReservationProcess/>
    <FAQ/>
    <Contact/>
    </>
  )
}

