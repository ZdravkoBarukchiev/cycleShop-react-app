import { Navigation } from "./Navigation/Navigation"
import { BanerSection } from "./BanerSection/BanerSection"
export const Header =()=>{
    return(
        <div className="header_section header_bg">
        <Navigation />
        <BanerSection />
      </div>
    )
}