import React from "react";
import Footer from "../Components.app/Footer";
import { CoreValues } from "../Components.app/Home.Page/CoreValues";
import { HomeAboutSection } from "../Components.app/Home.Page/HomeAboutSection";
import { OurTeam } from "../Components.app/Home.Page/OurTeam";
import { NavSection } from "../Components.app/NavSection";
import OurPartners from "../Components.app/OurPartners";

export default function Services() {
return (
    <div>
        <NavSection />
        <HomeAboutSection />
        <OurTeam />
        <CoreValues />

        <OurPartners />
        <Footer />
    </div>
);
}
