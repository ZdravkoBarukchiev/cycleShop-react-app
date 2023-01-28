import { Navigation } from "./Navigation/Navigation"
import { BanerSection } from "./BanerSection/BanerSection"
export const Home =()=>{
    return(
        <div className="header_section header_bg">
        <Navigation />
        <BanerSection />
      </div>
    )
}