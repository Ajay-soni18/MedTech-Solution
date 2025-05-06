import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import { allProducts } from '../data/products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'diagnostic', name: 'Diagnostic' },
    { id: 'monitoring', name: 'Monitoring' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'patient-care', name: 'Patient Care' }
  ]
  
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category.toLowerCase() === selectedCategory)

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Products</h1>
            <p className="text-xl text-gray-100 mb-8">
              Discover our range of innovative, high-quality medical equipment designed to meet the demands of modern healthcare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Browse Our Product Line" 
            subtitle="Find the perfect medical solutions for your healthcare facility"
          />
          
          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Product Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Product Support" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            
            <div>
              <SectionHeading 
                title="Product Support & Training" 
                subtitle="We ensure you get the most out of your medical equipment"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Training</h3>
                  <p className="text-gray-600">
                    Our team provides comprehensive training for all our products, ensuring your staff can utilize them effectively and safely.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Technical Support</h3>
                  <p className="text-gray-600">
                    Access to 24/7 technical support for troubleshooting and maintenance to keep your equipment running smoothly.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Warranty & Service</h3>
                  <p className="text-gray-600">
                    All products come with comprehensive warranty coverage and maintenance service plans to protect your investment.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products