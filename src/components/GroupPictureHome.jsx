import { IconImagePlaceHolder } from "./Icon"

export const GroupPictureHome = () => {

  return (
    <div className='w-full flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2 aspect-1/2 relative'>
        <img
          className='w-full h-full object-cover bg-no-repeat z-[1] absolute'
          alt="image"
          loading="lazy"
          src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img1.jpg?v=1847" />
        <div className="absolute overflow-hidden skeleton offset-0 center ">
          <IconImagePlaceHolder className='z-[2]' />
        </div>
      </div>
      <div className='w-full md:w-1/2 aspect-1/2'>
        <div className='w-full aspect-square relative'>
          <img
            className='w-full h-full object-cover bg-no-repeat z-[2] absolute'
            alt="image"
            loading="lazy"
            src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img2.jpg?v=1847" />
          <div className='absolute skeleton offset-0 center'>
            <IconImagePlaceHolder className='z-[1]' />
          </div>
        </div>
        <div className='w-full aspect-square flex flex-row'>
          <div className='flex-1 relative'>
            <img
              className='w-full h-full object-cover bg-no-repeat z-[1] absolute'
              alt="image"
              loading="lazy"
              src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img3.jpg?v=1847" />
            <div className='absolute skeleton offset-0 center'>
              <IconImagePlaceHolder className='z-[1]' />
            </div>
          </div>
          <div className='flex-1 relative'>
            <img
              className='w-full h-full object-cover bg-no-repeat z-[1] absolute'
              alt="image"
              loading="lazy"
              src="https://theme.hstatic.net/1000370106/1000775487/14/homepage-img4.jpg?v=1847" />
            <div className='absolute skeleton offset-0 center'>
              <IconImagePlaceHolder className='z-[1]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}