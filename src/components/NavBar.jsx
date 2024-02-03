import { useState } from "react"
import { IconBag, IconBell, IconCaret, IconHome, IconTrashCan, IconUser } from "./Icon"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import logo from '~/assets/images/logo.png'

export const NavBar = () => {

  const nav = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IconHome className="w-4 h-4 mr-2" />
    },
    {
      name: "Collection",
      path: "/admin/collection",
      icon: <IconTrashCan className="w-4 h-4 mr-2" />
    },
    {
      name: "Product",
      path: "/admin",
      icon: <IconBell className="w-4 h-4 mr-2" />,
      sub: [
        { name: "Category", path: "/" },
        { name: "Category", path: "/" },
      ]
    },
    {
      name: "Order",
      path: "/admin",
      icon: <IconBag className="w-4 h-4 mr-2" />
    },
    {
      name: "User",
      path: "/admin",
      icon: <IconUser className="w-4 h-4 mr-2" />
    },
  ]

  return (
    <div className='w-0 md:w-60 transition-all relative border-r border-main h-svh'>
      <nav className='w-full px-1 flex flex-col h-full'>
        <Link className="w-full py-3 center gap-2">
          <img
            className="h-10"
            src={logo} />
          <h1 className='text-2xl font-bold'>LIBE</h1>
        </Link>
        <div className="w-full h-full overflow-y-auto flex-1 no-scrollbar">
          {nav.map((item, index) => (
            <NavItem
              key={index}
              {...item} />
          ))}
        </div>
      </nav>
    </div>
  )
}

const NavItem = ({ name, path, icon, sub = [] }) => {

  const [show, setShow] = useState(false)

  return (
    <div className="w-full">
      <div className="w-full h-9 flex flex-row items-center rounded hover:bg-gray-80 hover:dark:bg-gray-750 px-1">
        {icon}
        <Link className="flex-1" to={path}>
          {name}
        </Link>
        {sub.length > 0 && (
          <button
            className={twMerge(
              "p-1 transition-all",
              show ? "rotate-0" : "-rotate-90"
            )}
            onClick={() => setShow(!show)}>
            <IconCaret />
          </button>
        )}
      </div>
      <div className={twMerge(
        "w-full flex flex-col pr-1 transition-all"
      )}>
        {sub.map((item, index) => (
          <Link
            key={index}
            className={twMerge(
              "hover:bg-base-242 hover:dark:bg-base-54 w-full overflow-hidden transition-all flex items-center rounded pl-4",
              show ? "h-8" : "h-0"
            )}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}