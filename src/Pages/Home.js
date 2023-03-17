import { CommitmentSection } from "../Components.app/Home.Page/CommitmentSection"
import { CoreValues } from "../Components.app/Home.Page/CoreValues"
import { HeroSection } from "../Components.app/Home.Page/HomeHeroSection"
import { HomeAboutSection } from "../Components.app/Home.Page/HomeAboutSection"
import { NavSection } from "../Components.app/NavSection"
import { NewOfferingSection } from "../Components.app/Home.Page/NewOfferingSection"
import { OurTeam } from "../Components.app/Home.Page/OurTeam"
import Footer from "../Components.app/Footer"

export default function Header() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <HomeAboutSection />
      <CommitmentSection />
      <NewOfferingSection />
      <CoreValues />

      <Footer />
    </>
  )
}



