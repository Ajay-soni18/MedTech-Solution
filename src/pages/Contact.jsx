import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white md:pt-40 md:pb-28 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
            <p className="mb-8 text-xl text-gray-100">
              Have questions about our products or services? We're here to help
              you find the perfect medical solution for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FaMapMarkerAlt className="w-6 h-6 text-primary-600" />,
                title: "Location",
                content: "MNIT JAIPUR , Malaviya Nagar, 302017",
              },
              {
                icon: <FaPhone className="w-6 h-6 text-primary-600" />,
                title: "Phone",
                content: "+91 729696XXXX",
              },
              {
                icon: <FaEnvelope className="w-6 h-6 text-primary-600" />,
                title: "Email",
                content: "Medtechsolution@gmail.com",
              },
              {
                icon: <FaClock className="w-6 h-6 text-primary-600" />,
                title: "Hours",
                content: "Mon - Sat: 9:00 - 18:00, Sun: Closed.",
              },
            ].map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 shadow-sm bg-gray-50 rounded-xl"
              >
                {info.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {info.title}
                  </h4>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our products and services"
            centered
          />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {[
                {
                  question: "How can I request a product demonstration?",
                  answer:
                    "You can contact our sales team using the contact form on the website. We will arrange a virtual or in-person demo.",
                },
                {
                  question: "Do you offer technical support?",
                  answer:
                    "Yes, we provide 24/7 technical support for all our products. Visit our support page for more details.",
                },
                {
                  question: "Can I customize medical equipment orders?",
                  answer:
                    "Absolutely! We provide customization options. Please reach out with your requirements.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg shadow">
                  <h4 className="mb-2 text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
