export const ShopFooter = () => {

  return (
    <div className='w-full pb-10'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-3'>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold py-3 border-b text-lg mb-3'>ABOUT US</span>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Our Story</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>LIBÉ Stores</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Join LIBÉ Team</button>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold py-3 border-b text-lg mb-3'>HELP & INFORMATION</span>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>LIBÉcommunity</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Exchange & Return Policy</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>How To Order</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Size Guide</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Payment Method
          </button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Shipping</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>Privacy Policy</button>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold py-3 border-b text-lg mb-3'>CUSTOMER SERVICE</span>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>(+84) 909 408 169</button>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>support@libe.clothing</button>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-semibold py-3 border-b text-lg mb-3'>© LIBÉ</span>
          <button className='text-left px-2 leading-8 rounded hover:bg-gray-80 hover:dark:bg-gray-750 transition-all'>GRMNT Limited Company Business Registration No. 0315840235 issued on 09/08/2019 by department of Planning and Investment HCMC.</button>
        </div>
      </div>
    </div>
  )
}