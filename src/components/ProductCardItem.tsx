import { Link } from 'react-router-dom'
import Image from './Image'

const ProductCardItem = (props: ProductCardItemProps) => {

  const { name, price, primaryImage, secondaryImage } = props

  return (
    <div className='w-full'>
      <Link to='/products' className='block hover:-translate-y-[2px] transition-transform'>
        <div className='w-full aspect-2/3 relative'>
          <Image
            className='w-full h-full'
            src={primaryImage}
            skeleton={true} />
          <div className='absolute top-0 left-0 right-0 bottom-0 z-3 opacity-0 hover:opacity-100 transition-opacity duration-300'>
            <img
              className='w-full h-full'
              src={secondaryImage} />
          </div>
        </div>
        <div className='mt-2'>
          <h3 className='line-clamp-2'>{name}</h3>
        </div>
        <div className='mt-1'>
          <span>{price.toLocaleString()}₫</span>
        </div>
      </Link>
    </div>
  )
}

type ProductCardItemProps = {
  name: string,
  primaryImage: string,
  secondaryImage?: string,
  price: number
}

export default ProductCardItem