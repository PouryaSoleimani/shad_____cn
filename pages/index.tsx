import { CarouselComponent } from '@/components/myComponents/CarouselComponent'
import FormComponent from '@/components/myComponents/FormComponent'
import { NavbarComponent } from '@/components/myComponents/NavbarComponent'
import React from 'react'

function HomePage() {
  return (
    <section className='w-full bg-black'>
      <NavbarComponent />
      <CarouselComponent />
      <FormComponent />
    </section>
  )
}

export default HomePage
