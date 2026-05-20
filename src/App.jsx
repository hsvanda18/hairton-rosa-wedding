import './App.css'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Countdown  from './components/Countdown'
import BibleVerse from './components/BibleVerse'
import Story      from './components/Story'
import Ceremony   from './components/Ceremony'
import RSVP       from './components/RSVP'
import GiftList   from './components/GiftList'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Countdown />
      <BibleVerse />
      <Story />
      <Ceremony />
      <RSVP />
      <GiftList />
      <Footer />
    </>
  )
}
