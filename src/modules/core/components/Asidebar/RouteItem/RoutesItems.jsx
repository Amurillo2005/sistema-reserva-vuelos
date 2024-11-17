import { routes } from '../../../utils/constants/rutas';
import { RouteItem } from './RouteItem';

export const RoutesItems = () => {
  return (
    <div className="my-5">
        {routes.map((option, idx) => {
          return <RouteItem key={idx} option={option} />
        })}
    </div>
  )
}
