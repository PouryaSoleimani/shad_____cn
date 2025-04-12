import { CarouselComponent } from '@/components/myComponents/CarouselComponent'
import { NavbarComponent } from '@/components/myComponents/NavbarComponent'
import React from 'react'

function HomePage() {
  return (
    <section className='w-full bg-black'>
      <NavbarComponent />
      <CarouselComponent />
    </section>
  )
}

export default HomePage
