import { motion } from 'framer-motion'
import { FaCheck, FaCertificate, FaUserMd, FaGlobe } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'

const About = () => {
  const values = [
    {
      icon: <FaCheck className="text-3xl text-primary-500" />,
      title: 'Quality',
      description: 'We never compromise on the quality of our medical products, ensuring they meet the highest industry standards.'
    },
    {
      icon: <FaCertificate className="text-3xl text-primary-500" />,
      title: 'Innovation',
      description: 'We continuously invest in research and development to bring cutting-edge medical solutions to healthcare professionals.'
    },
    {
      icon: <FaUserMd className="text-3xl text-primary-500" />,
      title: 'Patient-Centered',
      description: 'We design our products with the ultimate goal of improving patient outcomes and experiences.'
    },
    {
      icon: <FaGlobe className="text-3xl text-primary-500" />,
      title: 'Integrity',
      description: 'We operate with transparency and ethical practices in all aspects of our business.'
    }
  ]
  
  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'MedTech Solutions was established with a vision to transform healthcare through innovative medical products.'
    },
    {
      year: '2013',
      title: 'First Product Line Launch',
      description: 'Successfully launched our first line of diagnostic equipment, quickly gaining recognition in the healthcare industry.'
    },
    {
      year: '2015',
      title: 'International Expansion',
      description: 'Began expanding operations to international markets, bringing our medical solutions to healthcare facilities worldwide.'
    },
    {
      year: '2018',
      title: 'Research Center Established',
      description: 'Opened our state-of-the-art research and development center to accelerate innovation in medical technology.'
    },
    {
      year: '2020',
      title: 'Industry Recognition',
      description: 'Received multiple awards for our contributions to medical technology and healthcare improvement.'
    },
    {
      year: '2023',
      title: 'Sustainable Initiatives',
      description: 'Launched eco-friendly product lines and implemented sustainable manufacturing practices across our operations.'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About MedTech Solutions</h1>
            <p className="text-xl text-gray-100 mb-8">
              Pioneering medical innovation with a commitment to quality, reliability, and improved healthcare outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3912992/pexels-photo-3912992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Company Foundation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="How MedTech Solutions came to be a leader in medical equipment"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6 text-gray-700"
              >
                <p>
                  Founded in 2010, MedTech Solutions began with a simple yet powerful mission: to develop medical technology that improves healthcare outcomes while making healthcare professionals' jobs easier.
                </p>
                <p>
                  Our founder, Dr. Robert Chen, experienced firsthand the limitations of existing medical equipment during his 15 years as a practicing surgeon. Frustrated by inefficient and outdated tools, he assembled a team of engineers and medical professionals to design better solutions.
                </p>
                <p>
                  What started as a small operation with just 5 team members has grown into a global company with over 500 employees across 12 countries. Throughout our growth, we've maintained our commitment to quality, innovation, and patient-centered design.
                </p>
                <p>
                  Today, MedTech Solutions is proud to serve thousands of healthcare facilities worldwide, continuing our legacy of creating medical equipment that truly makes a difference in patient care.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm">Our Mission</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Revolutionizing Healthcare Through Technology</h3>
              <p className="text-gray-700">
                Our mission is to develop and deliver innovative medical products that enhance the quality of healthcare delivery, improve patient outcomes, and make healthcare more accessible worldwide. We strive to be the trusted partner of healthcare professionals, providing them with tools that support their vital work.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-10 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 font-semibold rounded-full text-sm">Our Vision</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">A Future of Advanced, Accessible Healthcare</h3>
              <p className="text-gray-700">
                We envision a world where advanced medical technology is accessible to all healthcare facilities, where diagnosis and treatment are enhanced by innovative tools, and where healthcare professionals can provide the best possible care with reliable equipment. We aspire to be at the forefront of this healthcare revolution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide everything we do at MedTech Solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in the history of MedTech Solutions"
            centered
          />
          
          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg max-w-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-primary-500 mr-4">{item.year}</span>
                        <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex relative z-10 items-center justify-center w-8 h-8 rounded-full bg-primary-500 border-4 border-white my-4 md:my-0">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experienced professionals guiding MedTech Solutions"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Dr. Robert Chen",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Former surgeon with 15+ years of clinical experience, founded MedTech Solutions to address gaps in medical equipment quality."
              },
              {
                name: "Dr. Sarah Johnson",
                position: "Chief Medical Officer",
                image: "https://images.pexels.com/photos/5214952/pexels-photo-5214952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Board-certified cardiologist who ensures all our products meet the real-world needs of healthcare professionals."
              },
              {
                name: "Michael Rodriguez",
                position: "Chief Technology Officer",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Engineering expert with a background in biomedical innovation and over 20 years of experience in medical device development."
              },
              {
                name: "Jennifer Park",
                position: "Chief Operations Officer",
                image: "https://images.pexels.com/photos/5990437/pexels-photo-5990437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                bio: "Strategic leader who oversees global operations, ensuring we deliver high-quality products efficiently and sustainably."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-card"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Us in Revolutionizing Healthcare
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 text-gray-100"
            >
              Whether you're a healthcare facility looking for quality products or a professional interested in joining our team, we'd love to connect with you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button to="/products" variant="white" size="lg">
                Explore Our Products
              </Button>
              <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" size="lg">
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About