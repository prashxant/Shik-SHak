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
    <div className="navbar-root">
      <div className="logo">Fintech</div>
      <div className="links">
        {links.map((link,idx)=><a className="links-items" key={link.title}href="link.href">{link.title}</a>

        )}
      </div>
    </div>
  )
}
