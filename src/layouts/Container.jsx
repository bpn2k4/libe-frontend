

export const Container = ({ children }) => {

  return (
    <div className='w-full min-h-screen bg-main transition-colors duration-500 text-main'>
      {children}
    </div>
  )
}