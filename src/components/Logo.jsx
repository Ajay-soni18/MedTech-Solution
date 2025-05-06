import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-heading font-bold text-primary-600">MedTech<span className="text-secondary-500">Solutions</span></span>
    </Link>
  )
}

export default Logo