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

<div className="flex justify-between items-center">
      <div className="">Fintech</div>
      <div className="">
        {links.map((link,idx)=>(<a className="" key={link.title}href={link.href}>{link.title}</a>
        ))}
        <button className="btn ">Start Free Trial</button>
      </div>
    </div>

  )
}
