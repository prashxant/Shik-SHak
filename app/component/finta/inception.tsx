import React from 'react'
import { FintaHeading } from './heading';

export const Inception = () => {
  return (
    <div className="bg-p-10 flex flex-col items-center justify-center">
      <FintaHeading
        headingBlack="Pricing for "
        headingBlue="inception to scale"
        subheading="Transparent and scales with features you use, not your expenses."
      />
      <Card />
    </div>
  );
}













function Card () {
  return(
  <div className='shadow-md rounded-md border border-neutral-300 max-w-xl p-5'>
    <h1 className='text-blue-400 font-semibold tracking-tight'>Taxes</h1>
    <div className='flex justify-between items-baseline text-black gap-10'>
      <div className='text-sm tracking-tight'>
        Federal income tax
      </div>
      <p>$500</p>
    </div>
  </div>

  )}
