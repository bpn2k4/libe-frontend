import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

import Breadcrumb from '@components/Breadcrumb'
import { IconAngle } from '@components/Icon'
import Utils from '@utils'


const ProductDetail = () => {

  const { t } = useTranslation()

  const [product, setProduct] = useState({
    name: 'Striped Flowy Shirt',
    price: 250000,
    salePrice: 200000,
    sizes: [
      { name: 'S', selected: false },
      { name: 'M', selected: false },
      { name: 'L', selected: false },
      { name: 'XL', selected: false },
    ],
    colors: [
      { name: 'Navi', hex: '#000042', selected: false },
      { name: 'Blue', hex: '#ADD8E6', selected: false },
      { name: 'Green', hex: '#90EE90', selected: false },
      { name: 'Yellow', hex: '#FFFFAD', selected: false },
      { name: 'Black', hex: '#000000', selected: false },
    ],
    description: `Chất liệu: Cotton pha
Màu sắc: Hoạ tiết sọc trắng đen
Size S: Dài quần 100,5cm ; Vòng eo 68cm ; Vòng mông 92cm ; Độ rộng ống 79cm
Size M: Dài quần 101,5cm ; Vòng eo 72cm ; Vòng mông 96cm ; Độ rộng ống 81cm
Size L: Dài quần 102,5cm ; Vòng eo 76cm ; Vòng mông 100cm ; Độ rộng ống 83cm
Size XL: Dài quần 103,5cm ; Vòng eo 80cm ; Vòng mông 104cm ; Độ rộng ống 85cm`,
    attribute: {
      'Type': 'Long trousers',
      'Style': 'Wide-leg, high waist',
      'Detail': 'Pleats',
      'Material': 'Wrinkle-resistant',
      'Feature': 'Comfortable movement'
    },
    quantity: 1,
    images: [
      'https://product.hstatic.net/1000370106/product/8.1_e16f76d9fa5b4ee4b33a3221a2e63096_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.2_052fa34d370b4d2596b5ecc9bbaa4c6a_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.6_29982d41e8154524968251a796de1820_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.3_defaf5fdabfa4ecca761819fc8a50300_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.4_b8f57e384a3743f5bbbc20908fb28704_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.5_3c9222f5093f4cab914fdc9f0f487ac6_master.jpeg',
      'https://product.hstatic.net/1000370106/product/8.7_4c41da06352743c5ab72981a3dff0a87_master.jpeg',
    ]
  })

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  const breadcrumbItems = [
    { name: t('Home'), path: '/' },
    { name: t('Product'), path: '/products' },
    { name: 'Striped Flowy Shirt', path: '/products/denim-ware' },
  ]

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    Utils.GlobalComponent.Container.scrollToTop()
  }, [])

  return (
    <div className='w-full'>
      <Breadcrumb
        className='px-4 xl:px-0'
        items={breadcrumbItems}
      />
      <div className='w-full flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>
          <div className='w-full mx-auto max-w-[400px] aspect-2/3'>
            <img
              className='w-full h-full object-cover'
              src={selectedImage} />
          </div>
          <div className='w-full mt-4 relative'>
            <div className='overflow-x-auto whitespace-nowrap no-scrollbar' ref={ref}>
              {product.images.map((item, index) => (
                <button
                  key={index}
                  className='h-28 px-2 mr-2 inline-block rounded border border-primary last:mr-0'
                  onClick={() => setSelectedImage(item)}>
                  <img
                    key={index}
                    className='h-28 aspect-2/3 object-cover mx-auto'
                    src={item} />
                </button>
              ))}
            </div>
            <button
              className={twMerge(
                'absolute z-2 top-1/2 left-2 -translate-y-1/2 size-8',
                'flex items-center justify-center',
                'rounded-full border border-primary transition-all',
                'bg-rgb-215 dark:bg-rgb-60',
                'active:scale-95 hover:bg-primary',
              )}
              onClick={() => ref.current?.scrollTo({ left: ref.current.scrollLeft - 128, behavior: 'smooth' })}>
              <IconAngle />
            </button>
            <button
              className={twMerge(
                'absolute z-2 top-1/2 right-2 -translate-y-1/2 size-8',
                'flex items-center justify-center',
                'rounded-full border border-primary transition-all',
                'bg-rgb-215 dark:bg-rgb-60',
                'active:scale-95 hover:bg-primary',
              )}
              onClick={() => ref.current?.scrollTo({ left: ref.current.scrollLeft + 128, behavior: 'smooth' })}>
              <IconAngle className='rotate-180' />
            </button>
          </div>
        </div>
        <div className='w-full md:w-1/2 px-4 mt-10 mb-10 md:mt-0'>
          <h3 className='text-xl font-medium'>
            {product.name}
          </h3>
          <div className='mt-4 py-4 flex flex-row items-center gap-3 border-t border-primary'>
            <span className='text-lg font-medium'>
              {product.salePrice.toLocaleString()}₫
            </span>
            <span className='line-through'>
              {product.price.toLocaleString()}₫
            </span>
          </div>
          <div className='py-4 flex flex-row items-center border-t border-primary'>
            <div className='w-20'>
              <span className='font-semibold'>{t('Size')}</span>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
              {product.sizes.map((item, index) => (
                <button
                  key={index}
                  className={twMerge(
                    'px-4 py-2 rounded border border-primary font-semibold',
                    'hover:border-rgb-100 dark:hover:border-rgb-150',
                    item.selected && 'border-rgb-100 dark:border-rgb-150',
                  )}
                  onClick={() => {
                    const newSizes = product.sizes.map(item => ({ ...item, selected: false }))
                    newSizes[index].selected = true
                    product.sizes = newSizes
                    setProduct({ ...product })
                  }}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className='py-4 flex flex-row items-center border-t border-primary'>
            <div className='w-20'>
              <span className='font-semibold'>{t('Color')}</span>
            </div>
            <div className='flex flex-row flex-wrap gap-4'>
              {product.colors.map((item, index) => (
                <button
                  key={index}
                  className='flex flex-col items-center gap-2'
                  onClick={() => {
                    const newColors = product.colors.map(item => ({ ...item, selected: false }))
                    newColors[index].selected = true
                    product.colors = newColors
                    setProduct({ ...product })
                  }}>
                  <span>{item.name}</span>
                  <div className={twMerge(
                    'size-10 p-1 flex',
                    'rounded-full border border-primary',
                    'hover:border-rgb-100 dark:hover:border-rgb-150',
                    item.selected && 'border-rgb-100 dark:border-rgb-150',
                  )}>
                    <div className='flex-1 rounded-full' style={{ backgroundColor: item.hex }}>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className='py-4 flex flex-row items-center border-t border-primary'>
            <div className='w-20'>
              <span className='font-semibold'>{t('Quantity')}</span>
            </div>
            <div className='flex flex-row'>
              <button
                className='size-8 rounded-tl rounded-bl border border-primary hover:border-rgb-100 dark:hover:border-rgb-150'
                onClick={() => {
                  product.quantity = Math.max(1, product.quantity - 1)
                  setProduct({ ...product })
                }}>
                -
              </button>
              <div className='w-12 h-8 border-t border-b border-primary flex'>
                <input
                  className='w-full h-full outline-none text-center bg-transparent'
                  type='number'
                  value={product.quantity} />
              </div>
              <button
                className='size-8 rounded-tr rounded-br border border-primary hover:border-rgb-100 dark:hover:border-rgb-150'
                onClick={() => {
                  product.quantity += 1
                  setProduct({ ...product })
                }}>
                +
              </button>
            </div>
          </div>
          <div className='py-4 flex flex-row items-center gap-3 border-t border-primary'>
            <button className={twMerge(
              'h-10 px-8 border rounded border-primary',
              'font-semibold',
              'hover:border-rgb-100 dark:hover:border-rgb-150',
            )}>
              {t('AddToCart')}
            </button>
            <button className={twMerge(
              'h-10 px-8 border rounded border-primary',
              'font-semibold',
              'hover:border-rgb-100 dark:hover:border-rgb-150',
            )}>
              {t('BuyNow')}
            </button>
          </div>

        </div>
      </div>
      <div className='w-full mt-4 px-4 md:px-0'>
        <span className='text-lg font-semibold'>{t('ProductDetail')}</span>
        <div className='flex flex-col'>
          {Object.entries(product.attribute).map(([key, value]) => (
            <div key={key} className='flex flex-row mt-1'>
              <div className='w-32'>
                <span>{t(key)}</span>
              </div>
              <div>
                <span>{t(value)}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className='w-full mt-4 px-4 md:px-0'>
        <span className='text-lg font-semibold'>{t('ProductDescription')}</span>
        <div className='flex flex-col'>
          {product.description.split('\n').map((item, index) => (
            <span key={index} className='mt-1'>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className='mt-8'>
        <div className='w-full flex flex-col items-center'>
          <span className='text-xl font-medium'>{t('RelatedProducts')}</span>
        </div>
      </div>

    </div>
  )
}

export default ProductDetail