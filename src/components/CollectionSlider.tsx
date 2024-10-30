

const CollectionSlider = (props: CollectionSliderProps) => {

  const { name, description } = props

  return (
    <div className='w-full relative text-black'>
      <div className='w-full aspect-3/1 bg-[#fef37e]'>
      </div>
      <div className='absolute left-0 top-1/2 -translate-y-1/2 px-4 flex flex-col gap-2 md:hidden'>
        <span className='text-5xl font-bold'>{name}</span>
        <span className='text-lg'>{description}</span>
      </div>
      <div className='hidden md:block'>
        <div className='absolute left-4 top-1/2 -translate-y-1/2'>
          <span className='text-5xl font-bold'>{name}</span>
        </div>
        <div className='absolute right-4 top-1/2 -translate-y-1/2 max-w-[50%]'>
          <span className='text-lg'>{description}</span>
        </div>
      </div>
    </div>
  )
}

type CollectionSliderProps = {
  name?: string
  description?: string
}

export default CollectionSlider