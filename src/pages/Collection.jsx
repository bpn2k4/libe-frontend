import { useState } from "react"
import { GridProduct, Select } from "~/components"

import data from '../data'

export const Collection = () => {

  const options = [
    { value: '1', display: 'Kubernetes' },
    { value: '2', display: 'Container' },
    { value: '3', display: 'MySQL' },
    { value: '4', display: 'Docker' },
  ]

  const [products, setProducts] = useState(data.products.slice(0, 10))

  const [value, setValue] = useState('')

  return (
    <div className='w-full min-h-screen'>
      <div className='w-full h-60 bg-yellow-200 relative'>

      </div>
      <div className='w-full flex flex-row justify-between p-2'>
        <span>Collection</span>
        <Select
          label={'Sắp xếp theo'}
          value={value}
          onSelect={e => setValue(e.display == value ? '' : e.display)}
          options={options} />
      </div>
      <div className='w-full px-2'>
        <GridProduct
          products={products} />
      </div>
    </div>
  )
}