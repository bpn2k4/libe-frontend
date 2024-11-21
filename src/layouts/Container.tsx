import Utils from '@utils'
import { useRef } from 'react'
import { twMerge } from 'tailwind-merge'

const Container = (props: ContainerProps) => {

  const { children, className } = props

  const ref = useRef<HTMLDivElement>(null)

  Utils.GlobalComponent.Container = {
    scrollToTop: () => {
      if (!ref.current) return
      ref.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div
      className={twMerge(
        'w-full h-dvh bg-primary text-primary overflow-y-auto transition-all duration-300',
        className
      )}
      ref={ref}>
      {children}
    </div>
  )
}

export default Container

type ContainerProps = {
  children?: React.ReactNode,
  className?: string
}