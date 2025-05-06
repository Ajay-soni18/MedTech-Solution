import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import { featuredProducts } from "../data/products";

const Home = () => {
  const features = [
    {
      icon: <FaMicroscope className="text-4xl text-primary-500" />,
      title: "Advanced Technology",
      description:
        "Our products incorporate the latest medical technology for accurate and reliable results.",
    },
    {
      icon: <FaHeartbeat className="text-4xl text-primary-500" />,
      title: "Improved Patient Outcomes",
      description:
        "Designed to enhance patient care and contribute to better health outcomes.",
    },
    {
      icon: <FaUserMd className="text-4xl text-primary-500" />,
      title: "Healthcare Professional Approved",
      description:
        "Developed in collaboration with leading healthcare professionals to meet real clinical needs.",
    },
    {
      icon: <FaHospital className="text-4xl text-primary-500" />,
      title: "Hospital-Grade Quality",
      description:
        "All products meet or exceed industry standards for medical equipment.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white md:pt-40 md:pb-28 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        <div className="relative z-10 container-custom">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-8 md:w-1/2 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              >
                Innovative Medical Solutions for Modern Healthcare
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 text-lg text-gray-100 md:text-xl"
              >
                Empowering healthcare professionals with cutting-edge AI-driven
                medical products designed for efficiency, accuracy, and improved
                patient outcomes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button to="/products" variant="white" size="lg">
                  Explore Products
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-primary-600"
                  size="lg"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Medical Equipment"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Why Choose Our Medical Products"
            subtitle="Our products combine innovation with reliability to deliver exceptional healthcare solutions"
            centered
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 text-center bg-white rounded-lg shadow-card"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading
            title="Featured Products"
            subtitle="Discover our most popular medical solutions"
            centered
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/products" variant="primary" size="lg">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="p-12 text-center bg-white shadow-lg rounded-2xl">
            <SectionHeading
              title="Ready to Upgrade Your Medical Equipment?"
              subtitle="Contact our team to discuss how our products can benefit your healthcare facility"
              centered
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center gap-4 mt-8 sm:flex-row"
            >
              <Button to="/products" variant="primary" size="lg">
                Browse Products
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
