

export const Container = ({ children }) => {

  return (
    <div className='w-full min-h-screen bg-main transition-colors duration-500 text-main'>
      {children}
      <div className='w-full text-center pb-2'>
        Made by Chat GPT 3.5 Turbo
      </div>
    </div>
  )
}