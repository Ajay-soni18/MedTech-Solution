import { motion } from "framer-motion";
import Button from "./Button";

const ProductCard = ({ product }) => {
  const { name, image, description, features, category } = product;

  return (
    <motion.div
      className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-card hover:shadow-lg"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full top-4 right-4 bg-primary-500">
          {category}
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{name}</h3>
        <p className="mb-4 text-gray-600">{description}</p>

        <div className="mb-6">
          <h4 className="mb-2 text-sm font-semibold text-gray-700">
            Key Features:
          </h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600"
              >
                <span className="mr-2 text-primary-500">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between">
          {/* <Button 
            to={`/products/${name.toLowerCase().replace(/\s+/g, '-')}`}
            variant="outline"
            size="sm"
          >
            Learn More
          </Button> */}
          <Button to="/contact" variant="primary" size="sm">
            Request More Info
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
