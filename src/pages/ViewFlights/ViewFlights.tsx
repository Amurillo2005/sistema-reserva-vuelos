import React from 'react'
import Asidebar from '../../modules/core/components/Asidebar/Asidebar'
import { LayoutPrincipal } from '../../modules/core/Layouts/LayoutPrincipal'
import Flight from '../../modules/core/components/Flight/Flight'

/** Componente para ver todos los vuelos */
const ViewFlights = () => {
  return (
    <>
      <Asidebar />
      <LayoutPrincipal>
        <header>
          <h2 className='text-indigo-600 ml-5 font-medium text-2xl'>Mis tiquetes</h2>
        </header>
        <section className='w-full grid grid-cols-1 sm:grid-cols-4 mt-6'>
          {Array(5).fill(0).map((_, i) => (
            <Flight key={i} />
          ))}
        </section>
      </LayoutPrincipal>
    </>
  )
}

export default ViewFlights