import { twMerge } from 'tailwind-merge'
import Image from './Image'


const HomeGroupImage = (props: HomeGroupImageProps) => {

  const { className } = props

  return (
    <div className={twMerge('w-full flex flex-col md:flex-row', className)}>
      <Image
        className='w-full md:w-1/2 aspect-1/2'
        src='https://theme.hstatic.net/1000370106/1000775487/14/homepage-img1.jpg'
        skeleton={true}
      />
      <div className='w-full md:w-1/2'>
        <Image
          className='w-full aspect-1/1'
          src='https://theme.hstatic.net/1000370106/1000775487/14/homepage-img2.jpg' />
        <div className='flex flex-row'>
          <Image
            className='w-1/2 aspect-1/2'
            src='https://theme.hstatic.net/1000370106/1000775487/14/homepage-img3.jpg' />
          <Image
            className='w-1/2 aspect-1/2'
            src='https://theme.hstatic.net/1000370106/1000775487/14/homepage-img4.jpg' />
        </div>
      </div>
    </div>
  )
}

type HomeGroupImageProps = {
  className?: string
}

export default HomeGroupImage