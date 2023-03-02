import BuyTrade from "./containers/BuyTrade/BuyTrade"
import CryptoTable from "./containers/CryptoTable/CrtyptoTable"
import Cta from "./containers/CTA/Cta"
import Hero from "./containers/Hero/Hero"
import NavBar from "./containers/NavBar/NavBar"
import Partners from "./containers/Partners/Partners"


function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <CryptoTable />
      <BuyTrade />
      <Partners />
      <Cta />
    </div>
  )
}

export default App
