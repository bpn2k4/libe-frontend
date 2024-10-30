import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"
import { IconAngle } from "./Icon"
import React from "react"


const Breadcrumb = (props: BreadcrumbProps) => {

  const { className, items = [] } = props

  return (
    <div className={twMerge(
      'px-4 py-4',
      'flex flex-row items-center flex-wrap gap-x-2 gap-y-1',
      className
    )}>
      {items.map(({ name, path }, index) => (
        <React.Fragment key={index}>
          <div className='flex flex-row items-center justify-center relative'>
            <div className='absolute top-0 left-0 right-0 bottom-0'>
              {index != items.length - 1 ? (
                <Link to={path} className='hover:font-bold hover:underline transition-all text-rgb-100 dark:text-rgb-150 hover:text-primary'>
                  <span>{name}</span>
                </Link>
              ) : (
                <span className='font-semibold'>{name}</span>
              )}
            </div>
            <div className='font-bold underline opacity-0 -z-1'>{name}</div>
          </div>
          {index != items.length - 1 && (
            <div>
              <IconAngle className='rotate-180' />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

type BreadcrumbItem = {
  name: string,
  path: string,
}

type BreadcrumbProps = {
  className?: string,
  items?: BreadcrumbItem[],
}

export default Breadcrumb