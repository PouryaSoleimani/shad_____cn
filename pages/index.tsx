import { CarouselComponent } from '@/components/myComponents/CarouselComponent'
import { ChartComponent } from '@/components/myComponents/ChartComponent'
import FormComponent from '@/components/myComponents/FormComponent'
import { NavbarComponent } from '@/components/myComponents/NavbarComponent'
import React from 'react'

function HomePage() {
  return (
    <section className='w-full bg-black'>
      <NavbarComponent />
      <CarouselComponent />
      <FormComponent />
      <ChartComponent />
    </section>
  )
}

export default HomePage
