import { useEffect, useState } from "react"
import { GridProduct, Pagination, Select } from "~/components"

import data from '../data'

export const Collection = () => {

  const options = [
    { value: '1', display: 'Kubernetes' },
    { value: '2', display: 'Container' },
    { value: '3', display: 'MySQL' },
    { value: '4', display: 'Docker' },
  ]

  const [page, setPage] = useState(1)

  const products = data.products.slice((page - 1) * 12, page * 12)

  const [value, setValue] = useState('')

  useEffect(() => {

  }, [])

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
          products={products}
          isLoading={false} />
        <div className="w-full flex flex-col items-center mt-5">
          <Pagination
            page={page}
            total={Math.ceil(data.products.length / 12)}
            onChange={page => {
              console.log(page);
              setPage(page)
            }} />
        </div>
      </div>
    </div>
  )
}