import ContactForm from "@/components/Templates/Contact/ContactForm/ContactForm";
import MapBox from "@/components/Templates/Contact/Map/MapBox";
import React from "react";

function Contact() {
  return (
    <div className="container">
      <ContactForm />
      <MapBox />
    </div>
  );
}

export default Contact;
