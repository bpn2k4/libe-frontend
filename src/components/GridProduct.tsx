import { twMerge } from 'tailwind-merge'
import ProductCardItem from './ProductCardItem'
import { IconImagePlaceHolder } from './Icon'

const GridProduct = (props: GridProductProps) => {

  const { className, products = [], skeleton = true, number = 20 } = props

  return (
    <div className={twMerge(
      'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8',
      className
    )}>
      {skeleton ? (
        new Array(number).fill(0).map((_, index) => (
          <div key={index} className='w-full '>
            <div className='w-full relative aspect-2/3 skeleton flex items-center justify-center'>
              <IconImagePlaceHolder className='z-1' />
            </div>
            <div className='mt-2'>
              <div className='w-full h-5 relative skeleton rounded-md'></div>
            </div>
            <div className='mt-1'>
              <div className='w-full h-5 relative skeleton rounded-md'></div>
            </div>
          </div>
        ))
      ) : (
        products.map(({ name, primaryImage, secondaryImage, price }, index) => (
          <ProductCardItem
            name={name}
            price={price}
            primaryImage={primaryImage}
            secondaryImage={secondaryImage}
            key={index} />
        ))
      )
      }
    </div>
  )
}

type Product = {
  name: string,
  primaryImage: string,
  secondaryImage: string,
  price: number
}

type GridProductProps = {
  className?: string,
  skeleton?: boolean,
  products?: Product[],
  number?: number
}

export default GridProduct