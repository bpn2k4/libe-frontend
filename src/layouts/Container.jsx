

export const Container = ({ children }) => {

  return (
    <div className='w-full min-h-screen bg-primary transition-colors duration-300 text-primary text-sm'>
      {children}
    </div>
  )
}