import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const Splash = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    // setTimeout(() => setShow(false), 2000)
  }, [])

  return (
    <div className={twMerge(
      'Splash fixed offset-0 bg-main text-main center transition-transform duration-500 origin-top',
      show ? 'scale-y-100' : 'scale-y-0'
    )}>
      <span className='text-5xl font-bold'>LIBÉ</span>
    </div>
  )
}