import AdvancedTools from "./containers/AdvancedTools/AdvancedTools"
import BackToTopSection from "./containers/BackToTopSection/BackToTopSection"
import BuyTrade from "./containers/BuyTrade/BuyTrade"
import CryptoTable from "./containers/CryptoTable/CrtyptoTable"
import Cta from "./containers/CTA/Cta"
import Faq from "./containers/Faq/Faq"
import Footer from "./containers/Footer/Footer"
import GetStarted from "./containers/GetStarted/GetStarted"
import Hero from "./containers/Hero/Hero"
import IndustrySecurity from "./containers/IndustrySecurity/IndustrySecurity"
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
      <AdvancedTools />
      <IndustrySecurity />
      <GetStarted />
      <Faq />
      <BackToTopSection />
      <Footer />
    </div>
  )
}

export default App
