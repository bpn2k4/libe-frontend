

export const Container = ({ children }) => {

  return (
    <div className='w-full min-h-screen bg-primary text-primary text-sm transition-colors duration-300'>
      {children}
    </div>
  )
}