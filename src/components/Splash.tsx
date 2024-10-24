import { useEffect, useState } from 'react'
import { useDebounce } from '@hooks'
import { IconLoading } from './Icon'
import { twMerge } from 'tailwind-merge'

const Splash = () => {

  const [show, setShow] = useState(true)

  const duration = 2000

  const _show = useDebounce(show, show ? 0 : 500)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, duration - 500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    _show ? (
      <div className={twMerge(
        'fixed top-0 left-0 right-0 bottom-0 z-100',
        'flex flex-col items-center justify-center',
        'bg-secondary text-secondary transition-all duration-500',
        show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      )}>
        <div className='-translate-y-10 flex flex-col items-center justify-center'>
          <IconLoading />
          <h1 className='text-6xl font-bold -translate-y-6'>LIBÉ</h1>
        </div>
      </div>
    ) : (<> </>)
  )
}

export default Splash