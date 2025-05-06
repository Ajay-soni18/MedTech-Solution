import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 text-white bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="mb-4 text-gray-400">
              Providing innovative medical solutions for healthcare
              professionals worldwide since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors duration-200 hover:text-white"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Diagnostic Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Monitoring Devices
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Surgical Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  Patient Care
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>MNIT JAIPUR , Malaviya Nagar , 302017</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📱</span>
                <span>+91 729696XXXX </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <span>Medtechsolution@gmail.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⏰</span>
                <span>Mon-Fri: 9AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="mb-4 text-sm text-gray-500 md:mb-0">
              &copy; {new Date().getFullYear()} MedTech Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 transition-colors duration-200 hover:text-white"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
