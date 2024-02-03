

export const Container = ({ children }) => {

  return (
    <div className='w-full min-h-screen bg-main transition-colors duration-300 text-main text-sm'>
      {children}
    </div>
  )
}