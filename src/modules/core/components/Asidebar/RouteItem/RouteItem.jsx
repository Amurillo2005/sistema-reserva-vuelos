import { Link, useLocation } from "react-router-dom"
import PropTypes from 'prop-types'

export const RouteItem = ({ option }) => {
    console.log(option)
    const location = useLocation()
    const pathname = location.pathname
    const routeParts = pathname.split('/')
    const lastRoutePart = routeParts[routeParts.length - 1]

  return (
    <>
    <Link to={`/${option.path}`}>
        <div className={` cursor-pointer group flex my-3  hover:rounded-3xl px-4 py-4 hover:shadow-md text-base transition-all ease-in-out font-semibold ${lastRoutePart==option.path ? "bg-indigo-500 rounded-3xl" : "rounded-xl"} hover:bg-indigo-500 hover:text-white mx-3`}>
            <span className={`mr-3 text-gray-900 ${lastRoutePart==option.path ? "text-white" : ""} group-hover:text-white`}>{option.icon}</span>
        </div>
    </Link>
    </>
  )
}

RouteItem.propTypes = {
  option: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
}
