import { twMerge, useSystemSelector } from '@hooks'

const Container = (props: ContainerProps) => {

  const { children } = props

  const { theme } = useSystemSelector()

  return (
    <div className={twMerge(
      'w-full h-dvh min-h-dvh bg-primary text-primary overflow-y-auto transition-all duration-300',
      theme == 'light' ? 'track-light' : 'track-dark'
    )}>
      {children}
      <div className='w-full py-2 text-center'>Power by GPT-4o</div>
    </div>
  )
}

export default Container

type ContainerProps = {
  children?: React.ReactNode
}