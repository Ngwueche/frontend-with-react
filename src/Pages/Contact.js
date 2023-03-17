import React from "react";
import ContactComponent  from "../Components.app/ContactComponent";
import Footer from "../Components.app/Footer";
import { NavSection } from "../Components.app/NavSection";

export default function Contact() {
  return (
    <div>
      <NavSection />
      <ContactComponent />
      <Footer />
    </div>
  );
}
