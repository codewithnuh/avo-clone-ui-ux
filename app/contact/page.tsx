import ContactForm from "@/components/pages/contact/components/contact-form";
import Hero from "@/components/shared/hero";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <Hero pageTitle="Contact" />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
