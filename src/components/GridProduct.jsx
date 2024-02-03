import { twMerge } from "tailwind-merge"
import { IconImagePlaceHolder } from "./Icon"

/**@type {import('~/types').GridProduct} */
export const GridProduct = ({ className, products = [], isLoading, number = 12 }) => {

  return (
    <div className={twMerge(
      'w-full gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5',
      className
    )}>
      {products.map((item, index) => (
        <ItemProduct key={Math.random()} item={item} />
      ))}
      {isLoading && new Array(number).fill(0).map((_, index) => <Skeleton key={index} />)}
    </div>
  )
}

const ItemProduct = ({ item, skeleton = false }) => {



  return (
    skeleton ? <Skeleton /> :
      <div className='w-full relative flex flex-col cursor-pointer'>
        <div className='w-full relative aspect-2/3'>
          <div className='absolute offset-0 center skeleton'>
            <IconImagePlaceHolder className='z-[1]' />
          </div>
          <div className='absolute w-full h-full z-[2]'>
            <img
              className='absolute w-full h-full object-cover bg-no-repeat'
              src={item.images[0]}
              loading="lazy" />
            <img
              className='absolute w-full h-full object-cover bg-no-repeat opacity-0 hover:opacity-100 transition-opacity'
              src={item.images[1]}
              loading="lazy" />
          </div>
        </div>
        <div className='w-full mt-2 px-1 font-semibold line-clamp-1 break-words whitespace-normal'>
          {item.name}
        </div>
        <div className="px-1">
          {item.price.toLocaleString()}₫
        </div>
      </div>
  )
}

const Skeleton = () => {

  return (
    <div className='w-full relative flex flex-col pb-2'>
      <div className='w-full relative aspect-2/3 skeleton'>

      </div>
      <div className='w-full h-5 rounded-md relative skeleton mt-2'>
      </div>
      <div className='w-32 h-5 rounded-md relative skeleton mt-1'></div>
    </div>
  )
}