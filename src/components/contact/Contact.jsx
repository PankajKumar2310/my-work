import React, { useState } from 'react';
import Clippath from "../../components/ui/Clippath";
import ContactForm from "../../components/ui/Contact-form";

const ContactPage = () => {
    return (
        <section className="flex flex-col items-center justify-center px-4 text-center transition-colors duration-300 min-h-fit bg-background text-foreground">
            <div className="mb-6">
                <p className="text-sm tracking-wider uppercase text-muted-foreground">Get in Touch</p>
                <h1 className="text-4xl font-bold">Contact Me</h1>
            </div>

            {/* Contact Form Inline */}
            <ContactForm />

            <Clippath />
        </section>
    );
};

export default ContactPage;