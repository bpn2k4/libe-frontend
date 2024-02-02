import { useState } from "react"
import { IconBell, IconCaret, IconHome, IconTrashCan } from "./Icon"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

export const NavBar = () => {

  const navs = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IconHome className="w-4 h-4 mr-2" />
    },
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IconTrashCan className="w-4 h-4 mr-2" />
    },
    {
      name: "Dashboard",
      path: "/admin",
      icon: <IconBell className="w-4 h-4 mr-2" />,
      sub: [
        { name: "Category", path: "/" },
        { name: "Category", path: "/" },
      ]
    },
    { name: "Dashboard", path: "/admin" },
  ]

  return (
    <div className='w-0 md:w-[200px] transition-all relative border-r border-main'>
      <nav className='w-full px-1'>
        {navs.map((item, index) => (
          <NavItem
            key={index}
            {...item} />
        ))}
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
        <Link className="flex-1">
          {name}
        </Link>
        {sub.length > 0 && (
          <button
            className={twMerge(
              "p-1 transition-all",
              show ? "-rotate-90" : "rotate-0"
            )}
            onClick={() => setShow(!show)}>
            <IconCaret />
          </button>
        )}
      </div>
      <div className={twMerge(
        "w-full flex flex-col pl-3 pr-1 transition-all"
      )}>
        {sub.map((item, index) => (
          <Link
            key={index}
            className={twMerge(
              "hover:bg-base-242 hover:dark:bg-base-54 w-full overflow-hidden transition-all flex items-center rounded pl-1",
              show ? "h-8" : "h-0"
            )}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}