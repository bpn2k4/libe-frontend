import { twMerge, useSystemSelector } from '@hooks'

const Container = (props: ContainerProps) => {

  const { children, className } = props

  const { theme } = useSystemSelector()

  return (
    <div className={twMerge(
      'w-full h-dvh min-h-dvh bg-primary text-primary overflow-y-auto transition-all duration-300',
      theme == 'light' ? 'track-light' : 'track-dark',
      className
    )}>
      {children}
    </div>
  )
}

export default Container

type ContainerProps = {
  children?: React.ReactNode,
  className?: string
}