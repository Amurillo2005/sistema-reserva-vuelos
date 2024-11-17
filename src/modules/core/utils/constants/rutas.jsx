import { HomeIcon, TicketIcon } from '@heroicons/react/20/solid'
import AirPlaneSVG from '../../components/IconsSvg/IconsSvg'

export const routes = [
    {
      name: "Inicio",
      icon: <HomeIcon className=' size-10'/>,
      path: 'home'
    },
    {
      name: "Descubrir",
      icon: <AirPlaneSVG className=" size-10" />,
      path: 'search'
    },
    {
      name: "Vuelos",
      icon: <TicketIcon className=" size-10" />,
      path: 'my-flights'
    },
  ]