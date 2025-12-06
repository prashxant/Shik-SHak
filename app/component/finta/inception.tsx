import React from 'react'
import { FintaHeading } from './heading';

export const Inception = () => {
  return (
    <div className="p-10 flex flex-col items-center justify-center">
      <FintaHeading
        headingBlack="Pricing for "
        headingBlue="inception to scale"
        subheading="Transparent and scales with features you use, not your expenses."
      />
      <TaxSlider/>
      <Card />
    </div>
  );
}





const TaxSlider = () => {
  return (
    <div className="my-10 flex cursor-pointer items-center justify-center rounded-[6px] bg-neutral-200 text-[14px] font-medium text-neutral-800">
      <button className="m-0.5 cursor-pointer rounded-[6px] border border-neutral-300 bg-white px-2 shadow">
        Taxes
      </button>
      <button className="cursor-pointer  px-2">Accounting</button>
    </div>
  );
}








function Card () {
  return(
  <div className='shadow-md rounded-md border mb-20 border-neutral-300 max-w-xl p-5'>
    <h1 className='text-blue-400 font-semibold tracking-tight'>Taxes</h1>
    <div className='flex justify-between items-baseline text-black gap-10'>
      <div className='text-sm tracking-tight'>
        Federal income tax
      </div>
      <p>$500</p>
    </div>
  </div>

  )}
