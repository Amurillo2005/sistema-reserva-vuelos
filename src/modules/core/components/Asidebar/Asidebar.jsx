
import { RoutesItems } from './RouteItem/RoutesItems'
const Asidebar =() => {
  return (
    <section className='flex-col fixed justify-center ml-2 w-[100px] bg-white rounded-xl  shadow-xl backdrop-blur-3xl saturate-200'>
      <section className='text-center'>
        <RoutesItems/>
      </section>
    </section>
  )
}

export default Asidebar