import { twMerge } from 'tailwind-merge'

const Container = (props: ContainerProps) => {

  const { children, className } = props

  return (
    <div className={twMerge(
      'w-full h-dvh bg-primary text-primary overflow-y-auto transition-all duration-300',
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