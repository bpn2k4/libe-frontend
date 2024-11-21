

const HomeSubscribe = () => {

  return (
    <div className='w-full px-4 py-6 flex flex-col md:flex-row items-center md:justify-center gap-4 xl:px-0 md:gap-0'>
      <div className='flex flex-col gap-2 md:flex-1'>
        <span className='text-xl'>SUBSCRIBE TO US!</span>
        <span>{'Sign up to receive LIBÉ’s new arrival updates, sales, exclusive content, events and more!'}</span>
      </div>
      <div className='flex flex-col items-center w-full max-w-100 md:w-1/2 md:flex-row gap-3'>
        <input
          className='outline-none border-b p-3 bg-transparent w-full'
          placeholder='Enter your email!' />
        <button className='w-24 h-10 border rounded-md font-semibold'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default HomeSubscribe