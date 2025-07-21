import React from "react";

export const Navbar = () =>{
const links = [
  {
    title:"Guide",
    href:"#"
  },
  {
    title:"Pricing",
    href:"#"
  },
  {
    title:"Login",
    href:"#"
  }
]

  return (

<div className="bg-amber-300 w-[75vw] py-4 px-2 flex justify-between">
      <div className="px-y">Fintech</div>

      <div className="">
        {links.map((link,idx)=>(<a className=" px-4 " key={link.title}href={link.href}>{link.title}</a>
        ))}
        <button className="btn ">Start Free Trial</button>
      </div>
    </div>

  )
}
